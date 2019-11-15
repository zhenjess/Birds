import React from 'react';


const ShoesHeader = ({ gender }) => {
    if (gender === 'female') {
        return (
            <div>
                <div className="shoe-header">

                    <div className="female-shoe-image">
                        <div className="shoe-header-text">
                            <p className="shoe-header-title">Female Shoes</p>
                            <p className="shoe-header-texts">The world's most comfortable shoes for life’s everyday adventures.</p>
                        </div>
                    </div>
                </div>

                <div className="shoe-bar">
                    <div className="left-bar">
                        <p>All- 35 Results</p>
                    </div>

                    <div className="right-bar">
                        <div className="dropdown">
                            <span className="bar-link">Size</span>
                            <i class="fas fa-caret-down"></i>
                            <div className="dropdown-content">
                                <p>sizes</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="bar-link">Hue</span>
                            <i class="fas fa-caret-down"></i>
                            <div className="dropdown-content">
                                <p>colors</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="bar-link">Model</span>
                            <i class="fas fa-caret-down"></i>
                            <div className="dropdown-content">
                                <p>models</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="bar-link">Material</span>
                            <i class="fas fa-caret-down"></i>
                            <div className="dropdown-content">
                                <p>materials</p>
                            </div>
                        </div>
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
