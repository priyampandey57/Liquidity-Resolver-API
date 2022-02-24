require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router.js');

app.use(router);

app.listen(3000);

