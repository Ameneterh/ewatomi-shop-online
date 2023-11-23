import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    discount: {
      type: Boolean,
    },
    gift: {
      type: Boolean,
    },
    regularPrice: {
      type: Number,
      require: true,
    },
    discountPrice: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    imageUrls: {
      type: Array,
      require: true,
    },
    userRef: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
