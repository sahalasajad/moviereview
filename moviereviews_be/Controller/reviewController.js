const Review = require('../models/reviewModel');

// Create a review
const createReview = async (req, res) => {
try {
const { username, movieName, reviewText } = req.body;
const newReview = await Review.create({ username, movieName, reviewText });
res.status(201).json(newReview);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

// Get all reviews
const getReviews = async (req, res) => {
try {
const reviews = await Review.find();
res.status(200).json(reviews);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

module.exports = { createReview, getReviews };

