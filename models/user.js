const mongodb=require('mongoose');

const userschema= new mongodb.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const user=mongodb.model("user", userschema);

module.exports=user;