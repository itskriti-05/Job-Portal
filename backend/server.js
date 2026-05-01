require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

//middlewares to handle CORS
app.use(
    cors({
        origin : "*",
        methods : ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders : ["Content-Type", "Authorization"],
    })
);

//connect database
connectDB();

//middleware
app.use(express.json());

//ROUTES
// app.use("/api/auth" , authRoutes);

//serve uploads folder

app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));
app.listen(PORT , ()=> console.log(`server running at port ${PORT}`));