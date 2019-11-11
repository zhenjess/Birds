import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import ShoeIndexItem from './shoe_index_item';

class ShoeIndex extends Component {
    componentDidMount() {
        // debugger
        this.props.fetchAllShoes();
    }

    render() {
        if (!this.props.shoes) {
            return null;
        }
        // debugger
        return (
            
            <section className="shoe"> 
                {this.props.shoes.map((ele)=> {
                    return(
                    <>
                        <h1>{ele.model}</h1>
                        <h1>{ele.gender}</h1>
                    </>
                    );
                })}
            </section>
        );
    }
}

export default ShoeIndex;

