const fs=require("fs");

const biodata ={
    name: "KEshav",
    age:20,
    channel:"KEshav Sharma"
};


const jsonobject=JSON.stringify(biodata);
// console.log(jsonobject);

// const object=JSON.parse(jsonobject);
// console.log(object);

fs.writeFile('json1.json',jsonobject ,(err)=>{
    console.log("done");
});

fs.readFile("json1.json","utf-8",(err,data)=>{
// console.log(data);
const orData=JSON.parse(data);
console.log(orData);
});