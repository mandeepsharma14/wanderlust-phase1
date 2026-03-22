const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
      set: (v) =>
        v === "" || v === undefined
          ? "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
          : v,
    },
  },
  price: {
    type: Number,
    min: 0,
  },
  location: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    enum: ["Beach", "Mountains", "Cities", "Islands", "Ski", "Cabins", "Other"],
    default: "Other",
  },
  reviews: [
    {
      rating: { type: Number, min: 1, max: 5 },
      comment: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
