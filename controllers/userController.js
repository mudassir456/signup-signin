let userModel = require("../models/usersModel")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
let SECRET_KEY = "NOTESAPI"
async function signup (req,res){
    const {username,password,email}=req.body;
    try {
        const existingUser = await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message :" user already exist"})
        }
        const hashpassword = await bcrypt.hash(password,10);

        const result = await userModel.create({
            email : email,
            password : hashpassword,
            username : username
        })

        let token = await jwt.sign({email : result.email, id : result._id},SECRET_KEY);
        res.status(201).json({user : result, token :token})
    }catch (err){
        console.log(err)
        res.status(500).json({message : "something went wrong"})
    }
};


async  function signin (req,res){
let {email,password}=req.body;
try {
    const existingUser = await userModel.findOne({email:email});
    if(!existingUser){
        return res.status(404).json({message :" user not found"})
    }
    const matchpassword = await bcrypt.compare(password,existingUser.password);

    if (!matchpassword){
        res.status(400).json({message : "invalid credentials"})
    }
 
    
    let token = await jwt.sign({email : existingUser.email, id : existingUser._id},SECRET_KEY);
    res.status(201).json({user : existingUser, token :token})


    
} catch (error) {
    res.status(500).json({message : "something went wrong"})
}
};

module.exports = {signup,signin}