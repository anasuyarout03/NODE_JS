const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/UserSchema');
const router = express.Router();

router.use(express.urlencoded({extended:false}));
router.use(express.json());

// list of all users
router.get('/users',(req,res) => {
    User.find({},(err,user) => {
        if(err) throw err
        res.send(user);
    })
});

// register users
router.post('/register',(req,res) => {
    let hashpassword = bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpassword,
        role:req.body.role ? req.body.role : 'User'
    },(err,result) => {
        res.status(200).send('register successful')
    })
});

//login users
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return res.status(500).send({auth:false,token:'There is problem while login'})
        if(!user) return res.status(201).send({auth:false,token:'NO user found register first'})
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password);
            if(!passIsValid) return res.status(201).send({auth:false,token:'Invalid password'});
            let token = jwt.sign({id:user._id},config.secert,{expiresIn:86400});
            return res.status(200).send({auth:true,token})
        }
    });
});

//userInfo
router.get('/userInfo',(req,res) => {
    let token = req.headers['x-access-token'];
    if(!token) return res.status(201).send({auth:false,token:'No token provided'});
    jwt.verify(token,config.secert,(err,data) => {
        if(err) return res.status(500).send({auth:false,token:'Invalid token'});
        User.findById(data.id,(err,user) => {
            if(err) return res.send({auth:false,token:'Error while fetching user'});
            res.send(user)
        })
    })
})

module.exports = router;
