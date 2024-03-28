import express from "express";
import dotenv from "dotenv";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import { ErrorHandler } from "./middleware/errorMiddleWare.js";
import Mongo from "./config/db.js";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.static('uploads'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);
app.use(ErrorHandler);
Mongo();
app.listen(port, console.log(`Server Started on ${port} `));
