import React from 'react';

import { Link, withRouter } from 'react-router-dom';

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
        console.log(this.props);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="logout-form-container">
                <form>
                    <h2>MY ACCOUNT</h2>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
                    </style>
                    <br/>
                    {/* <input type="submit" className="submit" value="LOGOUT"/>   */}
                    <Link className="logout-link" onClick={this.handleSubmit} to="/">LOGOUT</Link> 
                </form>
            </div>
        );
    }
}

export default withRouter(LogoutForm);