const EventEmiter = require("events");

const event=new EventEmiter();

event.on("check", (sc,msg)=>{
console.log(`status code is ${msg}`);1
});

event.emit("check",200,"ok");

