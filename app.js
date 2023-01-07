const fs = require('fs');

fs.readFile('./files/lorem.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(err);
    console.log(data.toString());
})
