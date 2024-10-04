import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.routes.js";

// app configuration
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API working!");
});

app.listen(port, () => {
  console.log("Server started on PORT: " + port);
});

// import express from "express";
// import mongoose from "mongoose";
// import userRouter from "./routes/user.routes.js";
// import authRouter from "./routes/auth.routes.js";
// import cookieParser from "cookie-parser";
// import listingRouter from "./routes/listing.routes.js";
// import path from "path";
// import dotenv from "dotenv";

// dotenv.config();
// mongoose
//   .connect(process.env.MONGO_DB)
//   .then(() => {
//     console.log("Connected to MongoDB!");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const __dirname = path.resolve();

// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// app.listen(3000, () => {
//   console.log("Server is runnning on port 3000");
// });

// app.use("/api/user", userRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/listing", listingRouter);

// app.use(express.static(path.join(__dirname, "/client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

// app.use((error, req, res, next) => {
//   const statusCode = error.statusCode || 500;
//   const message = error.message || "Internal Server Error!";
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });
