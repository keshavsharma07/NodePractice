const fs = require("fs");

//fs.mkdirSync("folder");

//fs.writeFileSync('folder/bio.txt',"my name is keshav");

// fs.appendFileSync("folder/bio.txt"," Subscribe karo");

const data=fs.readFileSync("folder/bio.txt","utf-8");
console.log(data);