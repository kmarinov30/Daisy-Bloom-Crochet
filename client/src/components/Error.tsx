import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {

    return (
        <div className="error-section">
            <p>404 PAGE NOT FOUND</p>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default Error;