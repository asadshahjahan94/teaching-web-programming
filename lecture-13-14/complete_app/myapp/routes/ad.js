var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/olx",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});()=>{
    console.log("connected to DB")
}

const addUser = () => {
    let user = new User({name: "Asad", email: "asad@gmail.com", password: "123456"})
    user = new User({name: "Shah", email: "shah@gmail.com", password: "123456"})
    user = new User({name: "Ali", email: "ali@gmail.com", password: "123456"})
    res.send({message:"sucessfull"})
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

const adSchema = new mongoose.Schema({
    name: String,
    description: String,
})

const Ad = new mongoose.model("Ad", adSchema)

router.get('/', function (req, res) {
    Ad.find({}, (err, ads) => {
        if (err)
            res.send(err)
        else
            res.send(ads)
    })
})

router.get('/:id', function (req, res) {
    Ad.findOne({_id: req.params.id}, (err, ad) => {
        if (err)
            res.send(err)
        else
            res.send(ad)
    })
})

router.post('/', function (req, res) {
    const name = req.body.name
    const description = req.body.description
    const ad = new Ad({name, description})
    ad.save(err=> {
        if (err)
            res.send(err)
        else
            res.send({message:"sucessfull"})
    })
})

router.patch('/:id', function (req, res) {
    const name = req.body.name
    const description = req.body.description
    Ad.findById(req.params.id, function (err, ad) {
        if (!err) {
          ad.name = name
          ad.description = description
          ad.save(function (err) {
            if (err)
                res.send(err)
            else
                res.send({message:"sucessfull"})
          });
        }
        else
            res.send(err)
      });
})



module.exports = router;