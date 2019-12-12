import React from 'react';


const ShoesHeader = ({ gender }) => {
    if (gender === 'women') {
        return (
            <div>
                <div className="shoe-header">

                    <div className="women-shoe-image">
                        <div className="shoe-header-text">
                            <p className="shoe-header-title">Women Shoes</p>
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
                                <p>5</p>
                                <p>6</p>
                                <p>7</p>
                                <p>8</p>
                                <p>9</p>
                                <p>10</p>
                                <p>11</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="bar-link">Hue</span>
                            <i class="fas fa-caret-down"></i>
                            <div className="dropdown-content">
                                <p>Black</p>
                                <p>Grey</p>
                                <p>White</p>
                                <p>Red</p>
                                <p>Green</p>
                                <p>Blue</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="bar-link">Model</span>
                            <i class="fas fa-caret-down"></i>
                            <div className="dropdown-content">
                                <p>Runners</p>
                                <p>Loungers</p>
                                <p>Skippers</p>
                                <p>Toppers</p>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="bar-link">Material</span>
                            <i class="fas fa-caret-down"></i>
                            <div className="dropdown-content">
                                <p>Wool</p>
                                <p>Tree</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 

    return (
        <div>

            <div className="men-shoe-image">
                <div className="shoe-header-text">
                    <p className="shoe-header-title">Men Shoes</p>
                    <p className="shoe-header-texts">The world's most comfortable shoes for life’s everyday adventures.</p>
                </div>
            </div>  

            <div className="shoe-bar">
                <div className="left-bar">
                    <p>All- 33 Results</p>
                </div>

                <div className="right-bar">
                    <div className="dropdown">
                        <span className="bar-link">Size</span>
                        <i class="fas fa-caret-down"></i>
                        <div className="dropdown-content">
                            <p>5</p>
                            <p>6</p>
                            <p>7</p>
                            <p>8</p>
                            <p>9</p>
                            <p>10</p>
                            <p>11</p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <span className="bar-link">Hue</span>
                        <i class="fas fa-caret-down"></i>
                        <div className="dropdown-content">
                            <p>Black</p>
                            <p>Grey</p>
                            <p>White</p>
                            <p>Red</p>
                            <p>Green</p>
                            <p>Blue</p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <span className="bar-link">Model</span>
                        <i class="fas fa-caret-down"></i>
                        <div className="dropdown-content">
                            <p>Runners</p>
                            <p>Loungers</p>
                            <p>Skippers</p>
                            <p>Toppers</p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <span className="bar-link">Material</span>
                        <i class="fas fa-caret-down"></i>
                        <div className="dropdown-content">
                            <p>Wool</p>
                            <p>Tree</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ShoesHeader;
