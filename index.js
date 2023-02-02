const express = require('express');

const app = express();

app.listen(3001,function(){
    console.log('listening on 3000');
})

app.get('/',function(req,res){
    res.send('<h1>Welcome</h1>')
})