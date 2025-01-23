import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"
import connectDB from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDB_URI;

// connect to MongoDB
connectDB();

// Defining Routes
app.use("/book",bookRoute);

app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})
