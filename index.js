require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./db')

const app = express()
const PORT=8080

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({origin: 'https://your-frontend.netlify.app', credentials: 'true'}));
connectDB();


app.get('/', (req,res,next) => {
    res.status(500).json('This route points to the Home page');
})

app.get('/api/content', (req, res, next) => {
    res.status(500).json('This route will send all content data')
})

app.get('/user/:email', (req, res, next) => {
    res.status(500).json(`This route will send profile data for user: ${req.params.username}`);
});

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})