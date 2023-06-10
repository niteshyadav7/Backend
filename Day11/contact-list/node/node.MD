# CREATE SERVER USING NODE:

- HOW TO TAKE INPUT USING NODE PROMPT
- HOW TO CREATE A SERVER USING NODE.JS
- HOW TO RENDER ANY THING USING NODE.JS
- HOW TO USE "FS.MODULE" IN SINGLE PAGE.
- HOW TO USE "FS.MODULE" IN MULTIPLE.PAGES.

```

const http=require("http");
<!-- const hostName="127.0.0.1" -->
const hostName="localhost"
const port=8000;

<!-- BY THE HELP OF "FS" MODULE WE CAN READ THE EXTERNAL FILE AND FOR MULTIPLE FILE "USE CONDTIONAL OPERATION" -->

<!-- HOW TO WRITE FS MODULE -->
```

const fs=require("fs")
fs.readFile("./home.html",(err,data)=>{
if(err){
console.log("error",err)
return
}
return res.end(data)
})

```

const requestHandler=(req,res)=>{
    console.log(req.url)
    res.writeHead(200,{"content-type":"text/html"})
    return res.end("<div>Hello Nitesh!</div>")
}

const server=http.createServer(requestHandler);
server.listen(port,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`server running on ${hostName}:${port}`)
})
```
