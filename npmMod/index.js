const chalk =require ("chalk");

const validator=require("validator");
console.log(chalk.blue.underline("Hello World"));


const res =validator.isEmail("keshav@gma.com");
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));