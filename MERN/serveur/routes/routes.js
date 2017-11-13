const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const Movie = require('../model/movie');

// Where and how the files/images should be saved.
const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, path.resolve('../../MERN/public', 'uploads'));
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Show movies
router.get('/', (req, res) => {
  Movie.find((err, movies) => {
    if(err) {res.send(err)}
    res.json(movies);
  });
});

// Show one movie
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if(err) {res.send(err)}
    res.json(movie);
  });
});

// Post a movie
router.post('/add', upload.single('image'), (req, res) => {
  const newMovie = new Movie(req.body);
  console.log(req.file);
  newMovie.image = "uploads/" + req.file.filename;

  newMovie.save((err, movie) => {
    if(err) {res.send(err)}
    res.redirect("http://localhost:3000");
  });
  console.log(newMovie.image);

});

// Update a movie
router.post('/:id/edit', bodyParser.urlencoded({ extended: true }), (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, (err, updatedMovie) => {
    if(err) {res.send(err)}
    res.redirect('http://localhost:3000')
  });
});

// Delete a movie
router.post('/:id/delete', (req, res) => {
  Movie.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
    if(err) {res.send(err)}
    res.redirect('http://localhost:3000')
  });
});



module.exports = router;