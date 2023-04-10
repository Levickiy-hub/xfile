const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
const indexRouter = require('./routes/indexRoute');
const usersRouter = require('./routes/usersRoute');
//
app.use('/1', indexRouter);
app.use('/users1', usersRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});