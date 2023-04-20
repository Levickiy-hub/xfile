const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}));

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
const indexRouter = require('./routes/indexRoute');
const usersRouter = require('./routes/usersRoute');
const ordersRouter = require('./routes/orderRoute');
//
app.use('/1', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

// Start the server
app.listen(3002, () => {
    console.log('Server started on port 3000');
});