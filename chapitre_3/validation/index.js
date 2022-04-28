const express = require('express');
const app = express();

const usersRoutes = require('./controllers/users');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/validation');

const morgan = require('morgan')
const cors = require('cors')
const port = 3003;

app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.use('/', usersRoutes)
