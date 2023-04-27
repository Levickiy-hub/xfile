const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload({}))
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
const organizationsRouter = require('./routes/organizationRoute');
const ordersRouter = require('./routes/orderRoute');
const filesRouter = require('./routes/filesRoute');
//
app.use('/api/1', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/organizations', organizationsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/files', filesRouter);

// Start the server
app.listen(3002, () => {
    console.log('Server started on port 3000');
});