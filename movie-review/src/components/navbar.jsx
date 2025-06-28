import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Reviews</Link> |
            <Link to="/add-review">Add Review</Link>
        </nav>
    );
}

export default Navbar;