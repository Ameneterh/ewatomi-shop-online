import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((error) => {
      console.log(error);
    });

  //   mongoose.connection.on("Connected", () => {
  //     console.log("DB Connected");
  //   });
};

export default connectDB;
