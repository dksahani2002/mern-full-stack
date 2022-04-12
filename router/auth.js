const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const router = express.Router();
const Authenticate = require("../middleware/authenticate");

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.json({ error: "please correctly all details" });
  }
  try {
    const userexist = await User.findOne({ email: email });
    if (userexist) {
      return res.status(422).json({ error: "Email already exist" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });
    //yaha save krne se phle data ka password bcrypt kr do (ye hai middleware)
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: "user registered successfully" });
    } else {
      res.status(500).json({ error: "Failed to Registered" });
    }
  } catch (err) {
    console.log(err);
  }
});
// Using promises
// router.post("/register", async (req, res) => {
//     const {name,email,phone,work,password , cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.json({error:"please correctly all details"});
//     }
//     User.findOne({email:email}).then((userexist)=>{
//         if(userexist){
//             return res.status(422).json({error:"Email already exist"});
//         }
//         const user = new User({name,email,phone,work,password , cpassword})

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"});
//         }).catch((err)=> res.status(500).json({error:"Failed to registered"}));
//     }).catch((err)=>{console.log(error in creation)});

// });

//Login Router
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Enter all details" });
  }
  try {
    const isUser = await User.findOne({ email: email });
    if (!isUser) {
      return res.status(400).json({ error: "User not found!" });
    }

    if (email === isUser.email) {
      const isMatch = await bcrypt.compare(password, isUser.password);
      // console.log(isMatch);
      if (isMatch) {
        const token = await isUser.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        return res.status(200).json({ message: "Login Succesfull" });
      } else {
        return res.status(400).json({ error: "Enter all details correctly" });
      }
    } else {
      return res.status(400).json({ error: "Enter all details correctly" });
    }
  } catch (err) {
    console.log(err);
  }
});

// to send data to about page
router.get("/about", Authenticate, (req, res) => {
  res.send(req.rootUser);
});
// to send data to home and contact us page
router.get("/homcon", Authenticate, (req, res) => {
  res.send(req.rootUser);
});

//conatct us page data
router.post("/contact", Authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      console.log("error in contact form didnt got data");
      return res.json({ error: "please fill all data" });
    }
    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({
        message: "user message saved successfully",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// to send data to home and contact us page
router.get("/alldata", Authenticate, async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

//Logout page
router.get("/logout", (req, res) => {
  res.clearCookie('jwtoken',{path:"/"});
  res.status(200).send('user logout');
});
module.exports = router;
