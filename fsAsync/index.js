const fs= require('fs');


fs.writeFile('read.txt',"Today is awesome day!!!!",(err)=>{
    console.log("files created");
    console.log(err);
});



// fs.appendFile("read.txt","plzlike and share", ()=>{
// console.log("task completed");
// } );


fs.readFile("read.txt","UTF-8",(err,data)=>{
console.log(data);
});