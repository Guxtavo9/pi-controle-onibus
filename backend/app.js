const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const adminRouter = require('./routes/adminRouter');
const publicRouter = require('./routes/publicRouter');
const catracaRouter = require('./routes/catracaRouter');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/public', publicRouter);
app.use('/catraca', catracaRouter);


module.exports = app;
