var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const router = require('./Routes/TransactionAmt');
const PaymentRouter = require("./Routes/PaymentType");
const WithdrawlRouter = require("./Routes/Withdraw");
const ReceivedRouter = require('./Routes/ReceivedAmount');
const HistoryRouter = require("./Routes/History");
const UserRouter = require("./Routes/createroute");

const mongooseURL = 'mongodb+srv://rk:GSyAyFG971nofea9@cluster0.ec2srds.mongodb.net/TransactionData';
 mongoose.connect(mongooseURL, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => { 
  console.log('Connected to MongoDB');
 }).catch((error) => {
   console.error('Error connecting to MongoDB:', error);
 });

//app.use('/api/users', usersRouter);
app.use("/api/Transaction", router);
app.use("/api/Payment" , PaymentRouter);
app.use("/api/Received", ReceivedRouter);
app.use("/api/Withdrawl", WithdrawlRouter);
app.use("/api/History", HistoryRouter);
app.use("/api/Create", UserRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.get('/api/users', async (req, res) => {
  try{
    const users = await database.getAllUsers();
    res.json(users);
  } catch (error){
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;