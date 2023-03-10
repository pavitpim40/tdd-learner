require('dotenv').config();
const express = require('express');
const db = require('./connection/database');

const app = express();

db.authenticate().then(() => {
  console.log('DB Connected');
});

const PORT = process.env.PORT || 8080;
const MODE = process.env.NODE_ENV;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} in ${MODE} mode`);
});
