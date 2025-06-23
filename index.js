const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const session = require("express-session")
const passport = require("passport")

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 8080;

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET_KEY,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", userRoutes);
// app.get('/', (req,res,next) => {
//     res.status().json('This route points to the Home page');
// })

// app.get('/api/content', (req, res, next) => {
//     res.status().json('This route will send all content data')
// })

// app.get('/user/:email', (req, res, next) => {
//     res.status().json(`This route will send profile data for user: ${req.params.username}`);
// });

app.listen(PORT, () => {
  console.log("The server is listening");
});
