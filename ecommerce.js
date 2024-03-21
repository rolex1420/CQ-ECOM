const express=require("express");
const app=express();
const fs=require("fs");

app.get("/",(req,res)=>{
    if(req.query.name){
        const val=req.query;
        fs.readFile(__dirname+"/ecommerce.json","utf-8",(err,data)=>{
            data=JSON.parse(data);
            const arr=data.filter((ind)=>{
                return val.name==ind.Category;
            })
            // //res.send(`<h1>${arr}</h1>`);
            // arr.forEach(ele => {
            //     res.send(`<h1>${ele}</h1>`);
            // });
            res.json(arr);
        })
    }
    else{
    fs.readFile(__dirname+"/ecommerce.json","utf-8",(err,data)=>{
         data=JSON.parse(data);
      const val= data.map((ind)=>{
           return ind.Title;
        })
        res.send(`<h1>${val}</h1>`);
    })
}
})

// app.get("/abc",(req,res)=>{
//    res.sendFile(__dirname+"/ecommerce.html");
// })
// app.get("/category",(req,res)=>{
//     const val=req.query;
//     fs.readFile(__dirname+"/ecommerce.json","utf-8",(err,data)=>{
//         data=JSON.parse(data);
//         const arr=data.filter((ind)=>{
//             return val.name==ind.Category;
//         })
//         res.send(arr);
//     })

// })

app.listen(3001,(err)=>{
    if(err){
        console.log(err);
        console.log("unable to start server");
    }
    console.log("Server started...");
})
