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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//DataBase Connection
var Connection_String=config.dbURI;
var options={useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(Connection_String,options);
mongoose.connection.on('connected', function()
{ console.log("GetCertified DataBase Connected");})


// app.get('/', function(req, res){
//    res.sendFile(__dirname+ '/frontend/html/resume.html'); 
// })

app.use(express.static(__dirname+'/frontend'));
app.use('/api',apis);

// var userauth= require("./backend/api/userauth");
// app.use("/api/auth",userauth);


app.get('/:page', function(req, res){
    var ext = path.extname(req.params.page);
    if(ext=="")
    res.sendFile(__dirname+ '/frontend/html/'+ req.params.page+".html");
   
})

var port= process.env.PORT  || 3000;
app.listen(port,function cb()
{console.log("http://localhost:"+port)
});



// var sampleData = [
//     { contestname : "CodeForces", userid : 1234,userName: "Nikhil" },
//     { contestname : "CodeChef", userid : 1143, userName : "Pranay" },
//     { contestname : "HackerRank", userid : 7675, userName : "Kaushik" }
// ];

// app.get('/api/sample',(req,res)=>{
//     res.json(sampleData)
// })
// app.post('/api/sample/:u',(req,res)=>{
//     // console.log(req.body.data);
//     sampleData.push(req.body.data)
// })