import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import router from "./src/routes/githubRoutes.js";

const app = express();

//Middleware
app.use(cors());

//Parse incoming JSON requests
app.use(express.json());

//Routes
app.use("/api", router);


export default app;