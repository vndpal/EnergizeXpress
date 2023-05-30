const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:4,
        max:200
    },
    lastName:{
        type:String,
        required:false ,
        min:0,
        max:200
    },
    emailId:{
        type:String,
        required:true,
        min:8,
        max:200
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:200
    },
    createDate:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("User",userSchema);