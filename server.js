var express = require('express');
var app = express();
var mongoose= require('mongoose');
//const bodyParser = require("body-parser");
var passport = require('passport');
const sgMail = require("@sendgrid/mail");
const config = require("./backend/config");
sgMail.setApiKey(config.SendgridAPIKey);
var path = require('path');
var apis= require('./backend/api/allapiroutes.js');
var uis= require('./backend/ui/alluiroutes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


//DataBase Connection
var Connection_String=config.dbURI;
var options={useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(Connection_String,options);
mongoose.connection.on('connected', function()
{ console.log("GetCertified DataBase Connected");})



// var userauth= require("./backend/api/userauth");
// app.use("/api/auth",userauth);

app.use(express.static(__dirname+'/frontend'));
app.use('/api',apis);
app.use('/',uis);


var port= process.env.PORT  || 3000;
app.listen(port,function cb()
{console.log("http://localhost:"+port)
});

var sampleData = [
    { contestName : "Leetcode Long Challenge", ContestID : 1509,name: "Nikhil", passkey: 12131232313, email:"nikhil@gmail.com", rank: 1, certified:true },
    { contestName : "Leetcode Long Challenge", ContestID : 1509, name : "John Wick", passkey: 1234525324, email:"wick@gmail.com", rank: 4, certified:false },
    { contestName : "Leetcode Long Challenge", ContestID : 1509, name : "Pranay", passkey: 1234525452313, email:"pranay@gmail.com", rank: 2, certified:true },
    { contestName : "Leetcode Long Challenge", ContestID : 1509, name : "Kaushik", passkey: 1213857352313, email:"kaushik@gmail.com", rank:3, certified:false }
];

app.get('/api/sample',(req,res)=>{
    res.json(sampleData)
})
app.post('/api/sample/:u',(req,res)=>{
    // console.log(req.body.data);
    sampleData.push(req.body.data)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
  });
