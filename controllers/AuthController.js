const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = (req , res, next)=>{

    bcrypt.hash(req.body.Password, 10 , function(err,hashedPass){
        if(err){
            res.json({error:err})
        }
       // TO DO implementing user registration 
    });
   
}

const registerAdmin = (req , res, next)=>{

    bcrypt.hash(req.body.Password, 10 , function(err,hashedPass){
        if(err){
            res.json({error:err})
        }
       // TO DO implementing admin registration 
    });
   
}
const login = (req, res , next)=>{
    var email = req.body.Email
    var password = req.body.Password
    
    User.findOne({$or:[{Email: email}]}).then(user =>{
        if(user){
            
            bcrypt.compare(password,user.Password, function(err, result){
                if(err){
                    res.json({error:err})
                }
                if(result){
                   // TO DO implementing user login 
                }else{
                   
                }
            })
        }else{
            res.json({message:'No user found'})
        }
    })
}

module.exports = {
    registerUser, login,registerAdmin
}