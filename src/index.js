import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express"; // Ensure express is imported if not already

dotenv.config({
    path: './env'
});

const app = express(); // Ensure app is defined if not already

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed!!!", error);
    });
