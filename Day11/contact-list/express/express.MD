# Create server using express

- HOW TO CREATE SERVER =>SIMPLE RENDER "HELLO WORLD!"
- HOW TO ACCESS THE EXTERNAL FILE => AND SET EJS
- HOW TO MAKE YOUR OWN 404 PAGE
- HOW TO WRITE DYNAMICE USING EJS
- HOW TO WRITE =>TITLE,CONTACT LIST

```
const express=require("express");
const port =8000;
const hostName="http://127.0.0.1"
const path =require("path")

const app=express();

app.set("view engine","ejs')
app.set("views",path.join(__dirName,"view"),"views")



app.get("/",(req,res)=>{
    return res.render("home.ejs")
})

<!-- ALWAYS KEEP IT AS THE LAST ROUTE -->
<!-- BY THIS WE CAN RENDER OUR OWN ERROR ROUTE PAGE. -->
app.use((req,res,next)=>{
    res.status(404).render("404.ejs")
})
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`express running on ${hostName}:${port}`)
})
```
