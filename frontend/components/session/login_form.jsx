import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password: "", 
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
        const login = this.props.login;
        const user = Object.assign({}, this.state);
        login(user);
        this.setState({ processed: true });
    }

    demoLogin(e) {
        e.preventDefault();
        const demoLogin = { email: 'user@gmail.com', password: 'password' };
        this.setState({ user: demoLogin }, 
                      () => { const login = this.props.login;
                            let user = this.state.user;
                            login(user);
                            } 
                    );
    }

    renderErrors() {
        if (this.state.processed) {
            return (
                <div>
                    <ul>
                        {
                            this.props.errors.map( (error, i) => (
                                <li key={`error-${i}`}>{error}</li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>

                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <h1>LOGIN</h1>
                        <br />
                        <label>EMAIL</label>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />

                        <label>PASSWORD</label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        <br />
                        <input type="submit" className="submit" value="SIGN IN" />
                    </div>
                </form>
                <input type="submit" onClick={this.demoLogin} className="submit" value="DEMO SIGN IN" />
            </div>
        );
    }
}

export default LoginForm;