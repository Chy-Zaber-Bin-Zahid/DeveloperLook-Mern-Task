const Card = require("../models/cardModel");
const { successResponse } = require("./responseController");

// Find card by category
const findCard = async (req, res, next) => {
  try {
    const { category } = req.query; // Get the category from query parameters
    console.log(req.query);

    if (!category) {
      return res.status(400).json({
        message: "Category parameter is required",
      });
    }

    // Find cards matching the exact category
    const results = await Card.find({
      category: category, // Match exact category
    });

    if (results.length === 0) {
      return res.status(404).json({
        message: "No cards found matching the category",
      });
    }

    return successResponse(res, {
      statusCode: 200,
      message: "Cards retrieved successfully",
      payload: {
        cards: results,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findCard,
};
