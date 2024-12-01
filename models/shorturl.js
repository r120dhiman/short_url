const mongoose=require('mongoose');

const urlSchema= new mongoose.Schema({
    shortid:{
        type:String,
        required:true,
        unique:true
    },
    redirecturl:{
        type:String,
        required:true,
    },
    viewhistory:[{timestamp:{type:Number}}],
    createddBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
}, {timestamps:true}) ;

const shorturl=mongoose.model('shorturl', urlSchema);

module.exports=shorturl;