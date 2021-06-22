var express = require('express');
const app = express();
var path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static(path.join(__dirname+'/../../frontend')));


app.get("/", (req,res)=>
{   var p=path.join(__dirname+'/../../frontend/html/index.html')
    res.sendFile(p);})

app.get("/index", (req,res)=>
    {   var p=path.join(__dirname+'/../../frontend/html/index.html')
        res.sendFile(p);})

app.get("/access", (req,res)=>
{   var p=path.join(__dirname+'/../../frontend/html/access.html')
    res.sendFile(p);})


app.get("/dashboard", (req,res)=>
    {   var p=path.join(__dirname+'/../../frontend/html/dashboard.html')
        res.sendFile(p);})

app.get("/contest/:contestid", (req,res)=>
    {   var p=path.join(__dirname+'/../../frontend/html/contest.html')
        res.sendFile(p);})
  
// app.get("/contest/:id", (req,res)=>{
//     res.render('contest.ejs', {'title':'Contest Participants'});
// })

 app.get("/verify", (req,res)=>
{   var p=path.join(__dirname+'/../../frontend/html/verify.html')
    res.sendFile(p);})

    app.get("/frgtpswrd", (req,res)=>
{   var p=path.join(__dirname+'/../../frontend/html/frgtpswrd.html')
    res.sendFile(p);})

    app.get("/example", (req,res)=>
{   var p=path.join(__dirname+'/../../frontend/html/example.html')
    res.sendFile(p);})


app.get("/:contestid/:participantid", (req,res)=>
{   var p=path.join(__dirname+'/../../frontend/html/certificate.html')
    res.sendFile(p);})
// app.get("/:contestid/:participantid",(req,res)=>{
//     res.render('certificate.ejs')
// })


module.exports=app;