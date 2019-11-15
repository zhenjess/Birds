import React from 'react';

import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import ShoeIndex from '../shoes/shoe_index';

import ShoeIndexContainer from '../shoes/shoe_index_container';

class NestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processed: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDeafult();
        const shop = this.props.shop;
        const user = Object.assign({}, this.state);
        shop(user);
        this.setState({ processed: true });
    }

    renderErrors() {
        if (this.state.processed) {
            return (
                <div>
                    Hello
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
            <div className="nest-form">

                    <div className="shop-links">
                        <p>Your Nest is Empty</p>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                            </style>
                        <Link className="shop-link" to={"/shoes/male"}>
                            <input
                                type="submit"
                                className="submit"
                                value="SHOP MALE"
                            />
                        </Link>
                        <Link className="shop-link" to={"/shoes/female"}>
                            <input
                                type="submit"
                                className="submit"
                                value="SHOP FEMALE"
                            />
                        </Link>
                        {/* <Link className="shop-link" to={"/shoes/chicks"}>
                            <input
                                type="submit"
                                className="submit"
                                value="SHOP CHICKS"
                            />
                        </Link>
                        <Link className="shop-link" to={"/shoes"}>
                            <input
                                type="submit"
                                className="submit"
                                value="SHOP INSOLES"
                            />
                        </Link> */}
                    </div>
                {/* <div className="shop-form-container">
                    <form onSubmit={this.handleSubmit}>

                        {this.renderErrors()}
                        <div className="shop-form">
                                
                                <style>
                                    @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
                                </style>
                        </div>
                    </form>
                </div> */}
                {/* <ShoeIndex />
                <ShoeIndexContainer /> */}
            </div>

        );
    }

}

export default NestForm;


