const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const adminRouter = require('./routes/adminRouter');
// const publicRouter = require('./routes/publicRouter');
// const catracaRouter = require('./routes/catracaRouter');

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
// app.use('/public-site', publicRouter);
// app.use('/catraca', catracaRouter);

module.exports = app;
