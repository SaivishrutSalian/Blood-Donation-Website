const app = require('./app');
const dotenv = require('dotenv');
const dbConnection = require('./utils/db');
dotenv.config();

// Port
const PORT = process.env.PORT

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnection();
})