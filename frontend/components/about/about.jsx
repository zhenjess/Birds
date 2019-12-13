import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className='about'>
                <h1 className='summary'>
                    Meet the Developer
                </h1>

                <div className='profile'>
                    <img src="/Jessica_Zhen.jpg" alt="" />
                    <h3>Jessica Zhen</h3>
                    <div className="socialicons">
                        <a href="https://www.linkedin.com/in/jessica-zhen-b2272a122/" className="fab fa-linkedin" target="_blank" rel="noopener noreferrer">{null}</a>
                        <a href="https://angel.co/jessica-zhen" className="fab fa-angellist" target="_blank" rel="noopener noreferrer">{null}</a>
                        <a href="https://github.com/zhenjess" className="fab fa-github" target="_blank" rel="noopener noreferrer">{null}</a>
                        <a href="mailto:jessicazhen8@gmail.com" className="fab fa-google" target="_blank" rel="noopener noreferrer">{null}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;