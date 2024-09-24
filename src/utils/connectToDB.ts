import mongoose from "mongoose";

const mongoURI: string = process.env.MONGO_URI as string;

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error occurred while connecting to DB");
  }
};

export default connectToDB;
