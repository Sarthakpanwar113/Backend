//4.
//mongoose ka instace le aye 
const mongoose = require("mongoose");


//6.  abb .env file mein jo bhi configuration hain usko load kar deta hai
//process vale object ke ander 
require("dotenv").config();


//5.
//fucntion bna diya jisme hum mongoose dot connect ka method or yeh promise return kar rha hota hai isliye hota hai toh then and catch method
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })

    //7.

    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    } );
}


//8. export kar diya 
module.exports = dbConnect;