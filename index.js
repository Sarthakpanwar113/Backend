//1.express framework ka instance 
const express = require('express');
const app = express();

//configuration load karna 
//server ka port active kiya taki usko activate kar paye
//9. 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//10. 
//ager json body parse karne pad jaye toh iska use karke parse kar sakte hai
// middleware 
app.use(express.json());


//11.
//routes import karlo
const blog = require('./routes/blog');


//12.
//mount kardo route ko by api/v1 isko map kar diya route ke sath
// mount 
app.use("/api/v1",blog);



//13.
//data ko fetch karlo 
const dbConnect = require('./config/database');
dbConnect();


//2. Start Server 
//activate karva diya
app.listen(PORT,()=>{
    console.log("App is Running at the",PORT);
})


//3.
// Default Route 
app.get('/', (req,res) => {
    res.send(`<h1>HomePage</h1>`)
})