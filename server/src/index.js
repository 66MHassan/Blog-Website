const express = require('express');
const cors=require('cors');
const bodyparser = require('body-parser');
const mysql =require ('mysql');
const app=express();
const port=8000;

app.use(cors())
app.use(bodyparser.json())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'blog'
})

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("Database is connected successfuly....");
})

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

module.exports =index;