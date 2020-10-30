const fs=require("fs");


//creating a new file
fs.writeFileSync("read.txt","Welcome boo");

fs.writeFileSync("read.txt","Keshav,Welcome");

//reading data of another file

const buf_data=fs.readFileSync("read.txt");
// console.log(buf_data);
ori_data=buf_data.toString();
console.log(ori_data);