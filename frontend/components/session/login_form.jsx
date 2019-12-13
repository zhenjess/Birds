import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password: "", 
            processed: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.update.bind(this);
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

    // demoLogin(e) {
    //     e.preventDefault();
    //     const demoLogin = { email: 'user@gmail.com', password: 'password' };
    //     this.setState({ user: demoLogin }, 
    //                   () => { const login = this.props.login;
    //                         let user = this.state.user;
    //                         login(user);
    //                         } 
    //                 );
    // }

    demoLogin(e) {
        e.preventDefault();
        let i = 0;
        let j = 0;
        // let demoEmail = 'user@gmail.com';
        // let demoPassword = 'password';
        const demoLogin = { email: 'user@gmail.com', password: 'password' };
        // demoLogin = this.props.demoLogin;
        // const demoUser = Object.assign({}, this.state);
        this.props.login(demoLogin);
        this.setState({ processed: true });

        const typeUser = () => {
            let timeout;

            if (i < email.length) {
                document.getElementById('email').value += email.charAt(i);
                i++;
                timeout = setTimeOut(typeUser, 100);
            } else {
                clearTimeout(timeout);
            }
        }

        const typePassword = () => {
            let timeout;
            if (j < password.length) {
                document.getElementById('password').value += password.chartAt(j);
                j++;
                timeout = setTimeOut(typePassword, 100);
            } else {
                clearTimeout(timeout);
            }
        }

        if (this.props.formType === 'login') {
            typeUser();

            window.setTimeout(() => {
                typePassword();
            }, 1500)

            window.setTimeout(() => {
                this.setState({email: 'user@gmail.com', password: 'password'}, () => {
                    const user = Object.assign({}, this.state);
                    this.props.login(user)
                        .then(() => this.props.history.push('/login'));
                });
            }, 3000)
        }

        
    }
    
    update(field) {
        return (e => this.setState({ [field]: e.target.value }));
    };


    renderErrors() {
        // if (this.state.processed) {
          
            return (
                <div className="errors">
                    <ul>
                        {/* {
                            this.props.errors.map( (error, i) => (
                                <li key={`error-${i}`}>{error}</li>
                            ))
                        } */}
                        {Object.keys(this.props.errors).map((error, i) => (
                            <li key={`error-${i}`}>{this.props.errors[error]}</li>
                        ))}
                    </ul>
                </div>
            );
        // }
    }

    render() {
        return (
            <div className="login-form-container">
                <form  className="login-form" onSubmit={this.handleSubmit}>

                    <div className="login-content">
                        <br/>
                        <h2>LOGIN</h2>
                        {this.renderErrors()}
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
                        </style>
                        
                        <label>EMAIL</label>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                        </style>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />

                        <label>PASSWORD</label>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                        </style>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        <br />
                        <input type="submit" className="submit" value="SIGN IN" />
                        <br/>
                        <input type="submit" onClick={this.demoLogin} className="submit" value="DEMO SIGN IN" />
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;