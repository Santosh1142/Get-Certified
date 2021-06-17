var express = require('express');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const emailTemplates = require("../email");
const config=require("../config");


var item= require('../itemlib');
var User= require('../models/user');
var Contest= require('../models/contest');

const router = express.Router();

router.get("/:userid", (req, res) => {
    query={_id:req.params.userid};
    populateJson = {
        path: "contests",
        populate: { path: "contestId"}
    }
    // item.getItemById(req.params.userid, User, (err, result) => {
    //     if (err)
    //         console.log("error", e);
    //     else {
    //         console.log(result);
    //         res.send(result);
    //     }
    // })
    item.getItemByIdWithPopulate(req.params.userid,User,populateJson, (err,data)=>
    { res.status(201).json({result:data});})
   
})

router.post("/signup", async(req, res, next) => {
    console.log(req.body)
    item.getItemByQuery({ email: req.body.email }, User, (err, user) => {
        if (err) {
            console.log("err");
            res.status(500).json({
                error: err,
            });
        } else {
            if (user.length >= 1) {
                res.status(409).json({
                    message: "Email already exists",
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err,
                        });
                    } else {
                        const user = {
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            name: req.body.name,
                            mobileNumber: req.body.mobileNumber,
                            isEmailVerified: false,
                            creationtime: new Date().getTime()
                        };
                        item.createitem(user, User, async(err, result) => {
                            if (err) {
                                res.status(500).json({
                                    error: err,
                                });
                            } else {
                                result.verificationKey = shortid.generate();
                                result.verificationKeyExpires =
                                    new Date().getTime() + 20 * 60 * 1000;
                                await result
                                    .save()
                                    .then((result1) => {
                                        const msg = {
                                            to: result.email,
                                            from: config.sendgridEmail,
                                            subject: "Get Certified: Email Verification",
                                            text: " ",
                                            html: emailTemplates.VERIFY_EMAIL(result1),
                                        };

                                        sgMail
                                            .send(msg)
                                            .then((result) => {
                                                console.log("Email sent");
                                            })
                                            .catch((err) => {
                                                console.log(err.toString());
                                                res.status(500).json({
                                                    // message: "something went wrong1",
                                                    error: err,
                                                });
                                            });
                                        res.status(201).json({
                                            message: "user created",
                                            userDetails: {
                                                userId: result._id,
                                                email: result.email,
                                                name: result.name,
                                                mobileNumber: result.mobileNumber,
                                            },
                                        });
                                    })
                                    .catch((err) => {
                                        res.status(400).json({
                                            message: "Error",
                                            error: err.toString(),
                                        });
                                    });
                            }
                        })
                    }

                })
            }
        }
    })

});

router.patch("/verifyEmail",async(req, res, next) => {
    //console.log(req.body.key)
    const query={verificationKey:req.body.key};
    await User.findOne(query)
        .then(async(user) => {
            if (Date.now() > user.verificationKeyExpires) {
                res.status(401).json({
                    message: "Pass key expired",
                });
            }
            user.verificationKeyExpires = null;
            user.verificationKey = null;
            user.isEmailVerified = true;
            await user
                .save()
                .then((result1) => {
                    res.status(200).json({
                        message: "User verified",
                    });
                })
                .catch((err) => {
                    res.status(400).json({
                        message: "Some error",
                        error: err.toString(),
                    });
                });
        })
        .catch((err) => {
            res.status(409).json({
                message: "Invalid verification key",
                error: err.toString(),
            });
        });
});

router.post("/login", async(req, res, next) => {
    item.getItemByQuery({ email: req.body.email }, User, (err, user) => {
        if (err) {
            res.status(500).json({
                error: err,
            });
        } else {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth failed: Email not found probably",
                });
            }
            // if (user[0].isEmailVerified === false) {
            //     return res.status(409).json({
            //         message: "Please verify your email",
            //     });
            // }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth failed",
                    });
                }
                if(user[0].isEmailVerified)
                {if (result) {
                    console.log(result)
                    const token = jwt.sign({
                            userType: user[0].userType,
                            userId: user[0]._id,
                            email: user[0].email,
                            name: user[0].name,
                            mobileNumber: user[0].mobileNumber,
                        },
                        config.jwtSecret, {
                            expiresIn: "1d",
                        }
                    );
                    // req.header['auth-token'] = token;
                    return res.status(200).json({
                       
                        message: "Auth successful",
                        userDetails: {
                            userType: user[0].userType,
                            userId: user[0]._id,
                            name: user[0].name,
                            email: user[0].email,
                            mobileNumber: user[0].mobileNumber,
                            isEmailVerified: user[0].isEmailVerified,
                        },
                        token: token,
                    });
                }

                res.status(401).json({
                    message: "Auth failed1",
                });
            }
            console.log("Not Verified")
            res.status(401).json({
                message: "Your Email Is Not Verified",
            });
            });
        }
    });
});

module.exports=router;