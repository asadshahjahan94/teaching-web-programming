var express = require('express');
var router = express.Router();
const bcrypt = require ('bcrypt')
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/classified",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});()=>{
    console.log("connected to DB")
}

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    // add dob, 
})


const User = new mongoose.model("User", userSchema)

ACCESS_TOKEN_SECRET = "kajnkankjxnasnxkajsxkansx"

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, {expiresIn: "15m"}) 
}

router.post('/sign_in', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const encrptedPassword = "$2b$10$HKTUN6n25yD5de0lpleAGex4tqatPDNeJqpU4y2iYZ36G5VQoIakS"
  // find email from db
  // check if its password matches
  try {
    if (await bcrypt.compare(password, encrptedPassword)) {
      const accessToken = generateAccessToken ({user: email})
      res.json({
        accessToken: accessToken,
      })
    }
  } catch (e) {
    // wrong password will hang this API - We have to fix it
    res.status(401).send("Password Incorrect!")
  }
  
})

router.post('/sign_up', async (req, res) => {
  const email = req.body.email
  const password = await bcrypt.hash(req.body.password, 10)
  // if email and password are not empty
  // any problem with body, return 400
  // check if already exists
  // if already exists then return this message
  // store it into the database
  // 201 if stored
  res.status(201).send({
    email: email,
    password: password
  })
})

module.exports = router;
