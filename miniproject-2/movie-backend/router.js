import express from "express";
const router = express.Router();
import {
  getMoviesList,
  insertMovie,
  getMovieById,
  deleteMovie,
  updateMovie,
  searchMovie,
} from "./controllers/moviesHandler.js";
// get movies list;
router.get("/movies", getMoviesList);
router.post("/insertMovie", insertMovie);
router.post("/getMovieById", getMovieById);
router.post("/deleteMovie", deleteMovie);
router.post("/updateMovie", updateMovie);
router.post("/searchMovie", searchMovie);

export default router;
