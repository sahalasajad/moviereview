const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
username: {
type: String,
required: true,
},
movieName: {
type: String,
required: true,
},
reviewText: {
type: String,
required: true,
}
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);