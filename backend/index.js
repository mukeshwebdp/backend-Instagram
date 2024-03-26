require('dotenv').config();
const app = require('./app');
const databaseconnect = require('./config/databaseConfig');
databaseconnect();
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`sevver running at https://localhost:${PORT}`);
})