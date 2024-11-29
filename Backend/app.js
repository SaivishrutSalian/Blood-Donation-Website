const express = require('express');
const cors = require('cors');
const app = express();

module.exports = app;

// Cors
app.use(cors());

// JSON
app.use(express.json());

// Routes