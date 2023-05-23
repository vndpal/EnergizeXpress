const express = require("express");

const port = process.env.PORT || 3200;

const app = express();


app.get('/test',(req,res)=>{
    res.send({data:'message from server'});
})

app.listen(port,()=>
{
    console.log(`app is running on ${port}`);
})

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoute = require('./routes/auth/auth');
const dashboardRoute = require('./routes/auth/authDashboard');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    console.log('database connected!')
);

app.use(express.json(),cors());

app.use("/api/users",authRoute);
app.use('/api/dashboard',dashboardRoute);