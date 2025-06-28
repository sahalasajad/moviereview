import './App.css';
import { useState } from 'react';
import Reviews from './components/review';
import AddReview from './components/addReview';
import Card from './components/card';

function App() {
  const [reviews, setReviews] = useState([
    { id: 1, username: 'nil@123', title: 'Inception', review: 'Mind-blowing visuals and story!' },
    { id: 2, username: 'malu@22', title: 'The Godfather', review: 'A timeless classic.' },
  ]);

  const [view, setView] = useState('reviews');

  const addReview = (newReview) => {
    setReviews(prev => [...prev, { id: Date.now(), ...newReview }]);
    setView('reviews'); // Switch back to Reviews after adding
  };

  const deleteReview = (id) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Review </h1>
      </header>

      {/* Buttons instead of navbar */}
      <div className="nav-buttons">
        <button onClick={() => setView('reviews')}>Reviews</button>
        <button onClick={() => setView('add')}>Add Review</button>
      </div>

      <Card>
        {view === 'reviews' ? (
          <Reviews reviews={reviews} onDelete={deleteReview} />
        ) : (
          <AddReview onAdd={addReview} />
        )}
      </Card>
    </div>
  );
}

export default App;
