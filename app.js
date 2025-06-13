const express = require('express')
const app = express()
const PORT=8080
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const { get } = require('http')
const path = require('path')

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