var express = require('express');
const app = express();
var path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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

app.get("/contest/:id", (req,res)=>
    {   var p=path.join(__dirname+'/../../frontend/html/contest.html')
        res.sendFile(p);})

module.exports=app;