// const fs = require('fs');
// const path = require('path');
// //This function is used to read files
// fs.readFile(path.join(__dirname,'files','lorem.txt'),'utf-8',(err,data)=>{
//     if(err) throw err;
// ;
//     console.log(data);
// })

// console.log("Hello Node Js");

// //This function is used to write files

// fs.writeFile(path.join(__dirname,'files','lorem2.txt'),'Hi My name is Sadie Pink',(err)=>{
//     if(err)throw err;
//     console.log("write Complete");
// })
// //This function is used to update files.....

// fs.appendFile(path.join(__dirname,'files','lorem2.txt'),'\n\nYes it is',(err)=>{
//     if(err)throw err;
//     console.log('Append Complete');


//     fs.rename(path.join(__dirname,'files','lorem2.txt'),path.join(__dirname,'files','newLorem.txt'),(err)=>{
//         if(err)throw err;
//         console.log('rename Complete');
//     })
// })



// //This function is used to caught errors
// process.on('uncaughtException',err=>{
//     console.error(`There was an fucking error :${err.message}`)
//     process.exit(1);
// })


//Working With Promises.......
const FsPromise = require('fs').promises;

const path = require('path');


const fileOps  = async()=>{

    try{
      const data = await FsPromise.readFile(path.join(__dirname,'files','lorem.txt'),'utf-8')
        console.log(data);

        await FsPromise.writeFile(path.join(__dirname,'files','PromiseWrite.txt'),data);
        await FsPromise.appendFile(path.join(__dirname,'files','PromiseWrite.txt'),'\n\nNice to Meet You Ashish');
        await FsPromise.rename(path.join(__dirname,'files','PromiseWrite.txt'),path.join(__dirname,'files','PromiseUpdated.txt'));
    }catch(err){
        console.error(err);
    }

}

fileOps();



// fs.readFile(path.join(__dirname,'files','lorem.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
    
// })
