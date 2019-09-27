const Movie = require('../models/product.model');

exports.test = function (req, res) {
    res.send('This is the test controller !');
};

exports.create = function (req, res) {
    let movie = new Movie(
        {
            title: req.body.title,
            date: req.body.date
        }
    );

    movie.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Movie Created successfully')
    })
};

exports.read = function (req, res) {
    Movie.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(movie);
    });
}

exports.edit = function (req, res) {
    Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Movie udpated.');
    });
};

exports.delete = function (req, res) {
    Movie.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Movie deleted successfully!');
    });
};