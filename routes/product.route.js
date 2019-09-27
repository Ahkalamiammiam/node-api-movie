module.exports = (app) => {
    const movies = require('../controllers/product.controller');

    app.post('/movies', movies.create);

    app.get(':id', movies.read);

    app.put('/movies/:movieId', movies.edit);

    app.delete('/movies/:movieId', movies.delete);

}