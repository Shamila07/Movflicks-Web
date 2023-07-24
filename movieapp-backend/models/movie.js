const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rated: {
        type: String,
        required: true
    },
    runtime: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    production_company: {
        type: String,
        required: true
    },
    cast:{
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    posterlink: {
        type: String,
        required: true
    },
})
const Movie = mongoose.model('movies', MovieSchema);
module.exports = Movie;


