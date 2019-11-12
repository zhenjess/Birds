import React from 'react';

import { Route } from 'react-router-dom';

import ShoeIndexItem from './shoe_index_item';

class ShoeIndex extends React.Component {
    componentDidMount() {
        // debugger
        this.props.fetchAllShoes();
    }

    // render() {
    //     if (!this.props.shoes) {
    //         return null;
    //     }
    //     // debugger
    //     return (
            
    //         <section className="shoe"> 
    //             {this.props.shoes.map((ele)=> {
    //                 return(
    //                 <>
    //                     <h1>{ele.model}</h1>
    //                     <h1>{ele.gender}</h1>
    //                 </>
    //                 );
    //             })}
    //         </section>
    //     );
    // }

    render() {
        const { shoes } = this.props;

        return (
            <div className="shoe-index-text">
                <h2>hello</h2>
                <ul>
                    {
                        shoes.map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={shoe.id}
                            />
                        ))
                    }
                   
                </ul>
            </div>
        );
    }


}

export default ShoeIndex;

