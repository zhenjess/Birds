import React from 'react';

import { Link } from 'react-router-dom';

const ShoeIndexItem = ({ shoe }) => (
    <li className="shoe-index-item">
        <Link to={`/shoe/${shoe.id}`}>
            <span>{shoe.id}</span>
            <span>{shoe.model}</span>
        </Link>
    </li>
);

export default ShoeIndexItem;