import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
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
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is runnning on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
