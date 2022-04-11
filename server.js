import express from 'express';
import mongoose from "mongoose";
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import cors from "cors";

// const DATABASE_CONNECTION = "mongodb://localhost:27017/webdev";
const DATABASE_CONNECTION = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(DATABASE_CONNECTION);
helloController(app);
userController(app);
tuitsController(app);




app.listen(process.env.PORT || 4000);