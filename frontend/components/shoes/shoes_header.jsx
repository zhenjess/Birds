import React from 'react';


const ShoesHeader = ({ gender }) => {
    if (gender === 'female') {
        return (
            <div className="female-shoe-image">
                <div className="shoe-header-text">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                    </style>
                    <h1 className="shoe-header-title">FEMALE SHOES</h1>
                    <p className="shoe-header-texts">The world's most comfortable shoes for life’s everyday adventures.</p>
                </div>
            </div>
        );
    } 
    return (
        <div className="male-shoe-image">
            <div className="shoe-header-text">
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                </style>
                <h1 className="shoe-header-title">MALE SHOES</h1>
                <p className="shoe-header-texts">The world's most comfortable shoes for life’s everyday adventures.</p>
            </div>
        </div>
    );
};

export default ShoesHeader;
