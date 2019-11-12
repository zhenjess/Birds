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

    getShoesByModel(model) {
        let shoesArr = this.props.shoes.filter(shoe => shoe.model.toLowerCase() === model)
        debugger
        return shoesArr;
    }
    render() {
        const { shoes } = this.props;

        return (
            <div className="shoe-index-text">
                <h2>Runners</h2>
                <ul>
                    {
                        this.getShoesByModel('runner').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                                // key={`${shoe.id}-${shoe.material}`-${shoe.color}`}
                            />
                        ))
                    }
                   
                </ul>

                <h2>Loungers</h2>
                <ul>
                    {
                        this.getShoesByModel('lounger').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                            // key={`${shoe.id}-${shoe.material}`-${shoe.color}`}
                            />
                        ))
                    }

                </ul>

                <h2>Skippers</h2>
                <ul>
                    {
                        this.getShoesByModel('skippers').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                            // key={`${shoe.id}-${shoe.material}`-${shoe.color}`}
                            />
                        ))
                    }

                </ul>

                <h2>Toppers</h2>
                <ul>
                    {
                        this.getShoesByModel('toppers').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                            // key={`${shoe.id}-${shoe.material}`-${shoe.color}`}
                            />
                        ))
                    }

                </ul>

                {/* <h2>Breezers</h2>
                <ul>
                    {
                        this.getShoesByModel('breezers').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                            // key={`${shoe.id}-${shoe.material}`-${shoe.color}`}
                            />
                        ))
                    }

                </ul> */}
            </div>
        );
    }


}

export default ShoeIndex;

