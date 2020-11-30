import * as React from 'react';
import { Link } from 'react-router-dom';

import './404.css';

const NotFound = () => {
    return (
        <div className="page">
            <h1>404: I couldn't find that!</h1>
            <Link to="/" className="returnLink">Home</Link>
        </div>
    );
};

export default NotFound;