const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is inavlid');
            }
        }
    },
    age: {
        type: Number,
        validate(value){
            if(value <= 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    password:{
        type: String,
        required: true,
        validate(value){
            if(value.length < 3){
                throw new Error('Length of password is very small')
            }
        }
    }
})

module.exports = User;