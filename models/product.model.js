const mongoose = require('mongoose');
const schema = mongoose.Schema;

const  MovieSchema = new schema ({ 
    title: { type: String, required: true, max: 100 },
    date: { type: Number, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', MovieSchema);