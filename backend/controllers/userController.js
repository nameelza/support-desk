// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "Please fill in all fields" });
  }

  res.send("Register Route");
};

// @desc    Login a user
// @route   /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.send("Login Route");
};

module.exports = {
  registerUser,
  loginUser,
};
