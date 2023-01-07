const fs = require('fs');
const path = require('path');
//This function is used to read files
fs.readFile(path.join(__dirname,'files','lorem.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
;
    console.log(data);
})

console.log("Hello Node Js");

//This function is used to write files

fs.writeFile(path.join(__dirname,'files','lorem2.txt'),'Hi My name is Sadie Pink',(err)=>{
    if(err)throw err;
    console.log("write Complete");
})
//This function is used to update files.....

fs.appendFile(path.join(__dirname,'files','lorem3.txt'),'Testing Text',(err)=>{
    if(err)throw err;
    console.log('Append Complete');
})



//This function is used to caught errors
process.on('uncaughtException',err=>{
    console.error(`There was an fucking error :${err.message}`)
    process.exit(1);
})