import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className='footer-container'>
                <div className="footer-container-flex-left">
                    <div className="signup-box">Enter your email to stay in touch</div>
                </div>
                <div className="footer-container-flex-right">
                    <div className="footer-copyright">&copy; 2019 Birds, Inc.</div>
                    <a className="footer-git" href="https://github.com/zhenjess"><i className="fab fa-github" />Github</a>
                    <a className="footer-linkedin" href="https://www.linkedin.com/in/jessica-zhen-b2272a122/"><i className="fab fa-linkedin" />LinkedIn</a>
                    <a className="footer-angel" href="https://angel.co/jessica-zhen"><i className="fab fa-angellist" />Angelist</a>
                </div>
            </footer>
        );
    }
}

export default Footer;