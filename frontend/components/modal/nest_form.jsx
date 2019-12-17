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
        this.handleMenModalClick = this.handleMenModalClick.bind(this);
        this.handleWomenModalClick = this.handleWomenModalClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const shop = this.props.shop;
        const user = Object.assign({}, this.state);
        shop(user);
        this.setState({ processed: true });
    }

    renderErrors() {
        if (this.state.processed) {
            return (
                <div>e
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

    handleMenModalClick() {
        this.props.history.push('/shoes/male')
        this.props.closeModal()
    }

    handleWomenModalClick() {
        this.props.history.push('/shoes/female')
        this.props.closeModal()
    }

    render() {
        return (

            <div className="nest-form">
                {/* <div>
                    <Link to="/shoes" className="nest-link">
                        <h1>You're $50 away from free shipping</h1>
                    </Link>
                </div>   */}

                    <div className="shop-links">
                    <div className="nest-text">
                        <div className="nest-img"><i class="fas fa-shopping-cart"></i></div>
                        <p>You're $50 away from free shipping</p>
                    </div>
                    <br/>
                        <p>Your Nest is Empty</p>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                            </style>
                        <div onClick={this.handleMenModalClick} className="shop-link" >
                            <input
                                type="submit"
                                className="submit"
                                value="SHOP MEN"
                            />
                        </div>
                    <div onClick={this.handleWomenModalClick} className="shop-link">
                            <input
                                type="submit"
                                className="submit"
                                value="SHOP WOMEN"
                            />
                        </div>
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

export default withRouter(NestForm);


