const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');



mongoose.Promise = global.Promise;
mongoose.connect(config.uri,err=>{
    if(err){
            console.log('Could not connect to database:' + err);
    }else{
            console.log('Connect to database ' + config.db);
    }
});


app.use(express.static(__dirname + '/clint/dist/'))
app.get('*', (req, res)=>{
  res.sendfile(path.join(__dirname + '/clint/dist/index.html'));
});

app.listen(8080,()=>{
    console.log('lestion on 8080');
});