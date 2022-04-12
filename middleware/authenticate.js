const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");

const Authenticate = async (req,res,next)=>{
    
try{
    // console.log("yaha to phucha1");
    const token = req.cookies.jwtoken;
    // console.log("yaha to phucha2");
    const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
    const rootUser=await User.findOne({_id:verifyToken._id , "tokens.token":token});
    // console.log(rootUser);   
    if(!rootUser){
        throw new Error("User Not Found");
    }
    
    req.token = token;
    req.rootUser = rootUser;
    req.userID=rootUser._id;
    next();
}catch(err){
    res.status(401).send("Unauthorised")
    console.log(err);
}
}
module.exports = Authenticate;