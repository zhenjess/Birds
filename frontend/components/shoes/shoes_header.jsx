import React from 'react';


const ShoesHeader = ({ gender }) => {
    if (gender === 'female') {
        return (
            <div className="shoe-header">

                <div className="female-shoe-image">
                    <div className="shoe-header-text">
                        <p className="shoe-header-title">Female Shoes</p>
                        <p className="shoe-header-texts">The world's most comfortable shoes for life’s everyday adventures.</p>
                    </div>
                </div>
            </div>
        );
    } 

    return (
        <div className="male-shoe-image">
            <div className="shoe-header-text">
                <p className="shoe-header-title">Male Shoes</p>
                <p className="shoe-header-texts">The world's most comfortable shoes for life’s everyday adventures.</p>
            </div>
        </div>   
    );
};

export default ShoesHeader;
