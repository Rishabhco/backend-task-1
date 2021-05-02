const express=require('express');
const app=express();
const PORT=8080;
app.listen(
    PORT,
    ()=>console.log(`it's alive on http://localhost:${PORT}`)
)
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).send({
      "message":"OK"
    })
});
app.get('/fruits',(req,res)=>{
    res.status(300).send({
        "kiwi": "🥝",
        "stawberry": "🍓",
        "pinapple": "🍍",
        "pear": "🍐",
        "banana": "🍌",
        "grapes": "🍇",
    })
});

app.post('/add-fruit',(req,res)=>{
    const{id}=req.query;
    const {logo}=req.body;
   /* if(!logo){
        res.status(418).send({"message" : "we need a logo"})
    }*/
    res.send({
        "kiwi": "🥝",
        "stawberry": "🍓",
        "pinapple": "🍍",
        "pear": "🍐",
        "banana": "🍌",
        "grapes": "🍇",
        "pinapple": "🍍",
         
    });

});