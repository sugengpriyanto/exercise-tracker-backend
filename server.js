const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config({path:__dirname+'/.env'})
app.use(express.json());

const port = process.env.PORT || 5000;
const mongodb = process.env.ATLAS_URI;

mongoose.connect(mongodb, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => console.log('Database Connected'));

const userRouter = require('./routes/users');
const exRouter = require('./routes/exercises')

app.use('/users', userRouter);
app.use('/exercises', exRouter);

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.listen(port, () => console.log(`Server running on port: ${port}`));