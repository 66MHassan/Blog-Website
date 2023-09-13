//Module Requiring Portion
const express = require('express');
const cors=require('cors');
const bodyparser = require('body-parser');
const mysql =require ('mysql');
const app=express();
const port=8000;

//Middleware portion
app.use(cors())  //Here we enable with CORS (cross-origin resource sharing), It is a HTTP-header based mechanism which enables the server to allow or restrict access from any other origins
app.use(bodyparser.json())

//Here we creating connection with Database ....
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'blog'
})

// Just for checking Database Connection....
db.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("Database is connected successfuly....");
})

//Getting Data from Database ...
app.get("/listdata",(req,res)=>{

    db.query('select * from post',(err,result)=>{
        if(err){console.log(err)}

    console.log(JSON.stringify(result));
    })

})

//Posting data from React form to Database
app.post("/creatingPost",(req,res)=>{
    const title=req.body.title;
    const content=req.body.content;
    const tags=req.body.tags;
    const category=req.body.category;

    db.query('insert into post(title,content,tags) values (?,?,?)',[title,content,tags],(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
    })

})

app.listen(port,()=>{
    console.log(`Server is listening at Port : ${port}`);
})