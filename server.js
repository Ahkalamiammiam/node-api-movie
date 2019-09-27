const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const movie = require('./routes/product.route');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/movies', movie);

const dbConfig = require('./database');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to the database");
}).catch(err => {
    console.log(`Failed to connect to the database`, err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "Welcome on this API" });
});

require('./routes/product.route')(app);

app.listen(port, () => {
    console.log(`Node Server is running on port ${port}`);
});