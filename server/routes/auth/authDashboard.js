const User = require('../../models/User');
const verify = require('./authVerify');

const router = require('express').Router();

router.get('/allusers',verify,async(req,res)=>{
    try{
        const results = User.find().exec();
        results.then((data)=>{
            res.send(data);
        })
       
    } catch(error) {
        res.status(500).send(error);
    }
})

module.exports = router;