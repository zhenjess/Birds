import React from 'react';

import { withRouter } from 'react-router-dom';

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
        id (this.state.processed) {
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
           <div className="shop-form-container">
               <form onSubmit={this.handleSubmit}>

                   {this.renderErrors()}
                   <div className="shop-form">
                        
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
                        </style>
                   </div>
               </form>
           </div>

        );
    }

}

export default NestForm;


<div className="material-types">
    <style>
        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                    </style>
    <Link className="material-link" to={"/materials"}>
        <input
            type="submit"
            className="submit"
            value="WOOL"
        />
    </Link>
    <Link className="material-link" to={"/materials/tree"}>
        <input
            type="submit"
            className="submit"
            value="TREE"
        />
    </Link>
    <Link className="material-link" to={"/materials/sugar"}>
        <input
            type="submit"
            className="submit"
            value="SUGAR"
        />
    </Link>
    <Link className="material-link" to={"/materials/trino"}>
        <input
            type="submit"
            className="submit"
            value="Trino™"
        />
    </Link>
</div>