import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "", 
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
        const signup = this.props.signup;
        const user = Object.assign({}, this.state);
        signup(user);
        this.setState({ processed: true });
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
            <div className="signup_form_container">
                <form onSubmit={this.handleSubmit}>
                    <h1>CREATE AN ACCOUNT</h1>

                    <ul>
                        <li>Your credit card information will not be saved.</li>
                        <li>Register for fast and easy checkout and to save account order information.</li>
                    </ul>

                    {this.renderErrors()}
                    <div className="signup-form">
                        <br />
                        <label>FIRST NAME
                                <input
                                type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                            />
                        </label>
                        <label>LAST NAME
                                <input
                                type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                            />
                        </label>
                        <label>EMAIL*
                                <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <label>PASSWORD*
                                <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />
                        <input type="submit" className="submit" value="REGISTER" />
                    </div>
                </form>
                <p>By creating an account, you agree to our Terms of Use and Privacy Policy.</p>
                <p id="required-fields">* REQUIRED FIELDS</p>
            </div>
        );
    }
}

export default SignupForm;