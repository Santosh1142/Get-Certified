var express = require('express');
var app = express();
var mongoose= require('mongoose');
//const bodyParser = require("body-parser");
var passport = require('passport');
var path = require('path');
var apis= require('./backend/api/allapiroutes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//DataBase Connection
var Connection_String="mongodb+srv://nikhil_mohan:uDiD2RTJNQMh3ghL@cluster0.ooac4.mongodb.net/GetCertified?retryWrites=true&w=majority";
var options={useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(Connection_String,options,function cb(){
    console.log("GetCertified DataBase");
});
mongoose.connection.on('connected', function()
{console.log("Database Connected");})


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