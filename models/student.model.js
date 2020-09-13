const mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
      name:{
          type:String,
          required:true
      },
      dob:{
          type:Date,
          required:true
      },
      age:{
          type:Number,
          required:true
      },
      ad1:{
         type:String,
         required:true 
      },
      ad2:{
          type:String,
          required:true
      },
      state:{
          type:String,
          required:true
      },
      city:{
          type:String,
          required:true
      },
      pincode:{
          type:Number,
          required:true
      },
      fname:{
          type:String,
          required:true
      },
      mname:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    },
    check:{
        type:Boolean,
        required:true
    },
    textboxarea:{
        type:String
    }
},{
    timestamps: true,
  });

  mongoose.model('Student', studentSchema);