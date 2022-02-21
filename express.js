const m1=require("../Day1/module1")

//1. define express object
const express=require("express")
const app=express();

// for parsing the url 
const bodyparser=require("body-parser")

//2. define config setting


//3.define middle ware
app.use(bodyparser.urlencoded({extended:false})) // extended false will use query string module to parse url

//4. define routers
app.get("/",function (req,resp) {
    resp.sendFile("index.html",{root:__dirname}) // index.html is file name and root direname is location of file
  })


//5. create and start server
app.listen(3000)
console.log("servre started at port 3000")