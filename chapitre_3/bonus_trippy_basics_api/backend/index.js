const express = require('express');
const app = express();

const hotelsRoutes = require('./controllers/hotels');
const restaurantsRoutes = require('./controllers/restaurants');
const RoomsRoutes = require('./controllers/rooms')
const TablesRoutes = require('./controllers/tables')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trippy_basics');

const morgan = require('morgan')
const cors = require('cors')
const port = 3003;

app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.use('/', hotelsRoutes, restaurantsRoutes, RoomsRoutes, TablesRoutes)

app.get('/', (req, res) => {
    res.send('welcome trippy');
});
