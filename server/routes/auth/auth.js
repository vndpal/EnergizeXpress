const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
    firstName: Joi.string().min(4).required(),
    lastName:Joi.string().min(0).max(200),
    emailId:Joi.string().min(8).max(200).required(),
    password:Joi.string().min(8).max(200).required()
});

const loginScheam = Joi.object({
    emailId:Joi.string().min(8).max(200).required(),
    password:Joi.string().min(8).max(200).required()
})

router.post('/register',async (req,res)=>{
    const isEmailExists = await User.findOne({emailId:req.body.emailId});

    if(isEmailExists)
    {
        res.status(400).send("user already exists");
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    const user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        emailId:req.body.emailId,
        password:hashedPassword
    });

    try{
        const {error} = await registerSchema.validateAsync(req.body);

        if(error)
        {
            res.status(400).send(error.details[0].message);
            return;
        }
        else
        {
            const saveUser = await user.save();
            res.status(200).send("user created");
        }

    }
    catch(error)
    {
        res.status(500).send(error);
    }
});

router.post('/login',async (req,res)=>{
    const user = await User.findOne({emailId:req.body.emailId});

    if(!user)
    {
        res.status(400).send("user does not exists, if you are new user, please register");
        return;
    }

    const validPassword = await bcrypt.compare(req.body.password,user.password);

    if(!validPassword){
        res.status(400).send('Incorrect password');
        return;
    }

    try
    {
        const {error} = loginScheam.validateAsync(req.body);
        if(error){
            res.status(400).send(error.details[0].message);
            return;
        }
        else{
            const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
            res.header('auth-token',token).send(token);
        }
    }
    catch(error)
    {
        res.status(500).send(error);
        return;
    }
})

module.exports = router;