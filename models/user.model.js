const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    mobileNo: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10,
        unique:true
      },
      name: {
        type: String,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
      },
     
    
    saltSecret: String,
    
},{
    timestamps: true,
  });

// Custom validation for email

// Events
userSchema.pre('save', function (next) {
  if(this.saltSecret){
    next();
  }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}



mongoose.model('User', userSchema);