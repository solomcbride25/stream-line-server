const registerUser = async (req, res, next) => {
  const { firstName, lastName, userName, password } = req.body;
  try {
    const newUser = { firstName, lastName, userName, password };
    res.status(201).json({
      success: true,
      message: "User account created",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Internal server error!",
    });
  }
};

const login = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "User logged in",
  });
};

const logout = async (req, res, next) => {
    console.log("Logging out...");
    res.clearCookie("connect.sid", {
    path:"/"})
    res.status(200).json({
        message: "User logging out", 
    });
    {
        if(err) {
            return next(err);
        }
    }    
    sessionDestruction();
};

module.exports = {logout, login, registerUser}; 