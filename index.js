const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const userRoutes = require('./routes/userRoutes')

const app = express()
const PORT=8080

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());


app.get('/', (req,res,next) => {
    res.status().json('This route points to the Home page');
})

app.get('/api/content', (req, res, next) => {
    res.status().json('This route will send all content data')
})

app.get('/user/:email', (req, res, next) => {
    res.status().json(`This route will send profile data for user: ${req.params.username}`);
});

app.listen(PORT,() => {
    console.log("The server is listening")
})