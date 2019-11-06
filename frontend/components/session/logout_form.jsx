import React from 'react';

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
            <div className="session_form_container">
                <form onSubmit={this.handleSubmit}>
                    <h1>MY ACCOUNT</h1>
                    <br/>
                    <input type="submit" className="submit" value="LOGOUT"/>
                </form>
            </div>
        );
    }
}

export default LogoutForm;