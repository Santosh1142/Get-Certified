var express = require('express');
const router = express.Router();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
//const emailTemplates = require("");


var item= require('../itemlib');
var User= require('../models/user');
var Contest= require('../models/contest');
var Participants= require('../models/participants');

router.post("/add/:contestid", async (req,res)=>
{
    //console.log(req.params.contestid);
    var data= {
        _id: new mongoose.Types.ObjectId(),
        contestName : req.body.contestname,
        contestId: req.params.contestid ,
        //name: req.body.name,
        passkey: shortid.generate(),
        email: req.body.email,
        rank: req.body.rank,
        certified: false}
    item.createitem(data,Participants, (err, data)=>
    {if (err) { res.status(400).json({ error: err,});
    } else { res.status(200).json({ message: "created" }) }
   })
})

router.post('/delete/:id', async(req, res) => {
    console.log(req.params.userid);
    item.deleteItem({ _id: req.params.id }, false, Participants, (err, data) => {
        if (err) {
            res.status(400).json({
                error: err,
            });
        } else {
            res.status(200).json({ message:"Participant dropped" })
        }
    })
})

router.post("/makecertified", async(req, res, next) => {
    //console.log(req.body)
    var query={passkey: req.body.passkey, contestId: req.body.contestId};

    item.getItemByQuery(query, Participants, (err, data) => {
        if (err) {
            console.log("err");
            res.status(500).json({
                error: err,
            });
        } else {
            if (data.length == 0) {
                res.status(409).json({
                    message: "Participant Doesnot Exist",
                });
            } else {
                if(data[0].certified==true) res.status(200).json({message : "Already Certified", response:result});
                var update={certified:true, name:req.body.name};
                item.updateItemField(query,update,Participants,(err, result)=>
                {  if (err) {
                    console.log("err");
                    res.status(400).json({
                        error: err,
                    });}
                    else res.status(200).json({message : "updated", response:result});

                })

            }
        }
    })

});


module.exports=router;