const express = require('express');
const cors=require('cors');
const bodyparser = require('body-parser');
const app=express();
const port=8000;

app.use(cors())
app.use(bodyparser.json())

app.post("/creatingPost",(req,res)=>{
    const title=req.body.title;
    const content=req.body.content;
    const tags=req.body.tags;
    const category=req.body.category;
    console.log(title)
})





app.listen(port,()=>{
    console.log(`Server is listening at Port : ${port}`);
})