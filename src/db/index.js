import mongoose from "mongoose";
import { DB_name } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`);
        console.log("MongoDB connection successful");
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR", error);
        process.exit(1); // Exit with a failure
    }
};

export default connectDB;
