const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require('cookie-parser');
dotenv.config({ path: "./config.env" });
require("./db/connection"); 



const User = require('./model/userSchema');
const PORT = process.env.PORT || 8000;
 
//express.json() help in accessing body as json form apna application json ni smjhta isliye 
app.use(express.json());
//cookie parser
app.use(cookieParser());
//We link the router file for Auth.js
app.use(require('./router/auth'));

//deployment code
if(process.env.NODE_ENV=="production"){
  app.use(express.static("frontend/build"));
}

var server = app.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port; 
  
  console.log( "subscribe here", host, port);
});
