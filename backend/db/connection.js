import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DBURI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("error connecting to mongodb", error.message);
  }
};

export default connectToMongoDB;
