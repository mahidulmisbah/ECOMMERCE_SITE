import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";


// config env
dotenv.config();

// database connection 
connectDB();

// rest  
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
app.use('./api/v1/auth',authRoutes);

//rest api
app.get("/", (req,res) => {
    res.send("<h1 style=\"color: red; text-align: center; font-size: 40px;\">This is my world</h1>");
});


//PORT configer 
const PORT = process.env.PORT || 8020;

// run listen

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgYellow.white);
});