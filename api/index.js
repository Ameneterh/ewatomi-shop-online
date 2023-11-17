import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is runnning on port 3000");
});
