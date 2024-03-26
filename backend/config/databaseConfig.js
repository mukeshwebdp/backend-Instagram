const mongoose = require('mongoose');
const MONGOOSE_URL = process.env.MONGOOSE_URL || "mongodb://localhost:27017/instagramdb";

const databaseconnect = ()=>{
    mongoose
        .connect(MONGOOSE_URL,{
            // useUnifiedTopology: true
        })
        .then((conn) => {
            console.log(`connected database: ${conn.connection.host}`);
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = databaseconnect;