// This file for connect TO Mongo DB.

const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/skynote"

const connectTOMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected :)");
    })
}
module.exports = connectTOMongo;
