import { useState } from 'react';

function AddReview({ onAdd }) {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, review, username });
        setTitle('');
        setReview('');
        setUsername('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Movie Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Your Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddReview;