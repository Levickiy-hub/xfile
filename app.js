const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload({}));
app.use(cors({
    origin: 'http://localhost:3000', // Укажите точный адрес клиента
    credentials: true,
    optionSuccessStatus: 200,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
const indexRouter = require('./routes/indexRoute');
const usersRouter = require('./routes/usersRoute');
const organizationsRouter = require('./routes/organizationRoute');
const ordersRouter = require('./routes/orderRoute');
const filesRouter = require('./routes/filesRoute');
const casesRouter = require('./routes/casesRoute');
const authRouter = require('./routes/authRoute');
//
app.use('/api/1', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/organizations', organizationsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/files', filesRouter);
app.use('/api/cases', casesRouter);
app.use('/api/auth', authRouter);

app.listen(3002, () => {
    console.log('Server started on port 3002');
});