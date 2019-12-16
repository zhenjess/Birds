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

                </div>
            </footer>
        );
    }
}

export default Footer;