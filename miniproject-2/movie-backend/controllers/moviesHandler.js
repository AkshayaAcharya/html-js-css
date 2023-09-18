import moviesModel from "../models/MoviesModel.js";

/*
Create a simple node js api with the following endpoint.

1. A endpoint to get a list a movies.
2. A endpint to get a single movie based on id.
3. A endpoint to delete a movie.
4. A endpoint to update a movie.
5. A endpoint to create a movie.
6. A endpoint to get movies based on name / name search.
7. **Note** : The database should be created in Mongo DB.

Also create a simple documentation of your api for the user.
*/

// 1. A endpoint to get a list a movies.
export function getMoviesList(req, res) {
  moviesModel.find().then((response) => {
    res.send(response);
  });
}

// 2. A endpoint to create a movie.
export function insertMovie(req, res) {
  const movie = req.body;
  moviesModel.insertMany(movie).then((response) => {
    res.send("Movie added");
  });
}

//  3. A endpint to get a single movie based on id.
export function getMovieById(req, res) {
  const movieId = req.body;
  moviesModel.findOne({ _id: movieId }).then((response) => {
    res.send(response);
  });
}

//4. A endpoint to delete a movie.
export function deleteMovie(req, res) {
  const movieId = req.body;
  moviesModel.deleteOne({ _id: movieId }).then((response) => {
    res.send(response);
  });
}

//5. A endpoint to update a movie.

export function updateMovie(req, res) {
  const { _id, release_year } = req.body;
  moviesModel
    .findOneAndUpdate(
      { _id: _id },
      { $set: { release_year: release_year } },
      { returnDocument: "after" }
    )
    .then((response) => {
      res.send(response);
    });
}

// 6. A endpoint to get movies based on name / name search.
export function searchMovie(req, res) {
  const { movie_name } = req.body;
  moviesModel.find({ movie_name: movie_name }).then((response) => {
    res.send(response);
  });
}
