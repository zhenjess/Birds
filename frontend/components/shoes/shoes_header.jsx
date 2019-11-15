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

                <div className="dropdown-bar">
                    <div className="right-side">
                        <div className="types">
                            <span className="bar-link">Size</span>
                            <div className="dropdown-items">
                                <p>Sizes</p>
                            </div>
                        </div>
                    </div>
                    {/* <span className="bar-link">Size</span>
                    <span className="bar-link">Hue</span>
                    <span className="bar-link">Model</span>
                    <span className="bar-link">Material</span>

                    <div className="dropdown-items">

                    </div> */}
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
