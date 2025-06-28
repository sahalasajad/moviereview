function Reviews({ reviews, onDelete }) {
    return (
        <div className="tasks">
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                reviews.map((r, index) => (
                    <div className="card" key={r.id}>
                        <div style={{ textAlign: 'left', flex: 1 }}>
                            <h3>{r.title}</h3>
                            <p><strong>Review:</strong> {r.review}</p>
                            <p><strong>User name:</strong> {r.username}</p>
                        </div>
                        <button onClick={() => onDelete(r.id)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Reviews;
