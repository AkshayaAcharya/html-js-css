import express, { response } from "express";
import cors from "cors";
import { connect } from "mongoose";
import router from "./router.js"; //since this is local module so .js extension needed

import { config } from "dotenv";
import moviesModel from "./models/MoviesModel.js";
const app = express();
app.use(cors());

// connecting to db
config();
const DB_URI = process.env.DB_URI;
connect(DB_URI);

app.use(express.text());
app.use(express.json());
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(
  "/",
  (req, res, next) => {
    // console.log("From middleWare: /employees")
    next();
  },
  router
);
app.listen(4040, () => {
  console.log("Server started");
});
