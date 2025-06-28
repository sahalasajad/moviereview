const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { createReview, getReviews } = require('./controller/reviewController');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.post('/reviews', createReview);
app.get('/reviews', getReviews);

// Connect DB and Start Server
mongoose.connect('mongodb+srv://movie_review:movie123@todo.uatphas.mongodb.net/?retryWrites=true&w=majority&appName=todo', { 
    useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
app.listen(3000, () => console.log('Server started on http://localhost:3000'));
})
.catch(err => console.error(err));