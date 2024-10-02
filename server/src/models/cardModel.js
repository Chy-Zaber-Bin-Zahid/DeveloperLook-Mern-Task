const { Schema, model } = require("mongoose");

const cardSchema = new Schema(
  {
    category:{
      type: String,
      required: [true, "The category is required!"],
      trim: true,
      maxlength: [10, "The length of category can be maximum 10 characters"],
    },
    images: [
      {
        type: String,
        required: [true, "At least one image is required!"],
        trim: true,
        validate: {
          validator: function (v) {
            return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v); // URL validation
          },
          message: "Please provide a valid URL for the image!",
        },
      },
    ],
    heading1: {
      type: String,
      required: [true, "The first heading is required!"],
      trim: true,
      maxlength: [100, "The length of heading1 can be maximum 100 characters"],
    },
    heading2: {
      type: String,
      required: [true, "The second heading is required!"],
      trim: true,
      maxlength: [100, "The length of heading2 can be maximum 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required!"],
      trim: true,
      maxlength: [500, "The description can be maximum 500 characters"],
    },
  },
  { timestamps: true }
);

const Card = model("Card", cardSchema);

module.exports = Card;
