const User = require("../models/userModel");
const { successResponse } = require("./responseController");

// Register new user
const regUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    const arr = [];
    // Checking existing user by email
    if (existingUser) {
      arr.push("email");
    }

    // Checking telephone length
    if (req.body.phone.length < 11) {
      arr.push("telephone");
    }

    // Sending error message to client (front-end)
    if (arr.length === 2) {
      return res.status(400).json({
        error:
          "User with this email already exists and telephone is less than 11",
      });
    } else if (arr.length === 1 && arr[0] === "email") {
      return res.status(400).json({
        error: "User with this email already exists",
      });
    } else if (arr.length === 1 && arr[0] === "telephone") {
      return res.status(400).json({
        error: "Telephone is less than 11",
      });
    }

    const createUser = await User.create(req.body);

    return successResponse(res, {
      statusCode: 200,
      message: "user account created successfully",
      payload: {
        user: createUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  regUser,
};
