import mongoose from "mongoose";

const moviesSchema = mongoose.Schema({
    movie_name: String,
    release_year: Number,
    language: String
});

const moviesModel = mongoose.model('moviesModel', moviesSchema, 'movies')

export default moviesModel;