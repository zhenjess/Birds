import React from 'react';

import { Link } from 'react-router-dom';

class LogoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processed: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const logout = this.props.logout;
        const user = Object.assign({}, this.state);
        logout(user);
        this.setState({ processed: true });
    }

    render() {
        return (
            <div className="logout-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h2>MY ACCOUNT</h2>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
                    </style>
                    <br/>
                    {/* <input type="submit" className="submit" value="LOGOUT"/> */}
                    <Link to="/">LOGOUT</Link>
                </form>
            </div>
        );
    }
}

export default LogoutForm;