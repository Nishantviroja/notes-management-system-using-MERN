// This file for connect TO Mongo DB.

require('dotenv').config()

const mongoose = require('mongoose');
const mongoURI = process.env.DATABASE_URL;

const connectTOMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected :)");
    })
}
module.exports = connectTOMongo;
