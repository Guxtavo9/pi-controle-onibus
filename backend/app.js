const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require("multer");

const adminRouter = require('./routes/adminRouter');
// const publicRouter = require('./routes/publicRouter');
// const catracaRouter = require('./routes/catracaRouter');

const app = express();


app.use(cors())
var corsOptions = {
origin: 'http://localhost:3001',
optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// const whitelist = ['http://localhost:3001/',]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
// app.use('/public-site', publicRouter);
// app.use('/catraca', catracaRouter);

module.exports = app;
