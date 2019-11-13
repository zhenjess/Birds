import React from 'react';

import { Link } from 'react-router-dom';

const ShoeIndexItem = ({ shoe }) => (
    <li className="shoe-index-item">
        <div>
            <img className="shoe-image" src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_M_Wool_Runner_Kotare_GREY_PROFILEL_7c807da0-c1a4-4ac3-83f4-c97cb5b0b751.png?v=1571655678" alt=""/>
        </div>
        <Link to={`/shoe/${shoe.id}`}>
            {/* <span>{shoe.id}</span> */}
            <span>{shoe.hue}</span>
            <br/>
            <span>{'$95 '}</span> 
            <span>{shoe.gender + " "}</span>
            <span>{shoe.material + " "}</span>
            <span>{shoe.model}</span>
        </Link>

       

    </li>
);

export default ShoeIndexItem;


// const ShoeIndexItem = props => (
//     <li>
//         <Link to={`/shoes/${props.shoe.id}`}>{props.shoe.gender, props.shoe.model}</Link>
//     </li>
// );

// export default ShoeIndexItem;
