const mongoose = require('mongoose');

const newMovie = new mongoose.Schema({
    title: { type: String, required: true },
    release: { type: String, required: true },
    director: { type: String, required: true },
    image: {type: String}
}
);

module.exports = mongoose.model('Movie', newMovie);