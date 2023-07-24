const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config();
//var userRoute = require('./routes/UserRoute');

const PORT = process.env.PORT || 8000;

app.use(cors(
    { origin: 'http://localhost:4200' }
));
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//routes 
//server.use('/user', userRoute);

const movieRouter = require('./routes/movies.js');
app.use('/movies', movieRouter);
const userRouter = require('./routes/userlogins.js');
app.use('/user', userRouter);
//const userRouter = require('./routes/UserRoute.js');
//app.use('/user', userRouter);


app.listen(PORT, () => {
    console.log (`Server is running on port: ${PORT}`);
});
