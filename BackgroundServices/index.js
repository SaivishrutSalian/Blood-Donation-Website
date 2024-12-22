const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cron = require('node-cron');
const dbConnection = require('./utils/db');
dotenv.config();

// Server

const PORT = process.env.PORT;

// Schedule Task

const run = () => {
    cron.schedule('* * * * * *', () => {
      });
}

run();

app.listen(PORT, () => {
    console.log(`Backgroundservices is running on ${PORT}`);
    dbConnection();
})