const bcrypt = require("bcrypt");
const passport = require("passport");

const User = require("../models/userModel");

const registerUser = async (req, res, next) => {
  const { firstName, lastName, userName, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, userName, password:hashedPassword });

    await newUser.save()

    req.login(newUser, error => {
      if (error) {
        res.status(500).json({
          error: true,
          message: `Error when logging in:${error}`,
        });
      }

      res.status(201).json({
        success: true,
        message: "User account created",
        data: newUser,
      });
    })
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Internal server error!",
    });
  }
};

const login = async (req, res, next) => {
  passport.authenticate("local", (error, user, info) =>{
    if (error) {
      res.status(500).json({
        error: true,
        message: `Error when logging in:${error}`,
      });
    }

    if (!user) {
      res.status(500).json({
        error: true,
        message: `Error when logging out:${error}`,
      });
    }

    req.login(user, error => {
      if (error) {
        res.status(500).json({
          error: true,
          message: `Error when logging out:${error}`,
        });
      }
      
      res.status(200).json({
        success: true,
        message: "User logged in",
      });
    })
  })(req, res, next)
};

const logout = async (req, res, next) => {
  console.log("Logging out...");
  req.logout(error =>{
    if (error) {
      res.status(500).json({
        error: true,
        message: `Error when logging out:${error}`,
      });
    }

    res.clearCookie("connect.sid")
    
    res.status(200).json({
      message: "User logging out", 
    });
  })
};

module.exports = {logout, login, registerUser}; 