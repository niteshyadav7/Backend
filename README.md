# Backend

Coding Ninjas

### HOW TO TAKE INPUT

```
let args=process.argv //It will give the array with strings and you can give input using prompt(CMD)
    args=args.slice(2);//It will give you the only input.
           <!-- OR -->
const args =process.argv.slice(2);

<!-- Example: -->

const args=process.argv.slice(2);

const add=(a,b)=>{
    return a+b;
}

const addingResults=add(parseInt(args[0]),parseInt(args[1]));
console.log(addingResults);

```

### HOW TO USE MODUE

```
<!-- operations.js -->
module.exports.add=(x,y)=>{
    return x+y;
}

<!-- index.js -->
const args=process.argv.slice(2)
const operations=require("./operations")

const adding=operations.add(parseInt(args[0]),parseInt(args[1]))

```
