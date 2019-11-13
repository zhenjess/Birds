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

    getShoesByMaterialAndModel(material, model) {
        let shoesArr = this.props.shoes.filter(shoe => shoe.model.toLowerCase() === model && shoe.material.toLowerCase() === material)
        //debugger
        return shoesArr;
    }

    // getShoesByColor(hue) {
    //     let shoesArray = this.props.shoes.filter(shoe => shoe.hue.toLowerCase() === hue)

    //     return shoesArray;
    // }

    render() {
        const { shoes } = this.props;

        return (
            <div className="shoe-index-text">
                <h2>Wool Runners</h2>
                
                <ul className="shoe-category">
                    {
                        this.getShoesByMaterialAndModel('wool', 'runners').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                                key={`${shoe.id}-${shoe.material}-${shoe.hue}`}
                            />
                        ))
                    }
                   
                </ul>

                <br/>

                <h2>Tree Runners</h2>

                <ul className="shoe-category">
                    {
                        this.getShoesByMaterialAndModel('tree', 'runners').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                                key={`${shoe.id}-${shoe.material}-${shoe.hue}`}
                            />
                        ))
                    }

                </ul>

                <br/>

                <h2>Wool Loungers</h2>

                <ul className="shoe-category">
                    {
                        this.getShoesByMaterialAndModel('wool', 'loungers').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                                key={`${shoe.id}-${shoe.material}-${shoe.hue}`}
                            />
                        ))
                    }

                </ul>

                <br />

                <h2>Tree Loungers</h2>
            
                <ul className="shoe-category">
                    {
                        this.getShoesByMaterialAndModel('tree', 'loungers').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                                key={`${shoe.id}-${shoe.material}-${shoe.hue}`}
                            />
                        ))
                    }

                </ul>

                <br />

                <h2>Tree Skippers</h2>

                <ul className="shoe-category">
                    {
                        this.getShoesByMaterialAndModel('tree', 'skippers').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                                key={`${shoe.id}-${shoe.material}-${shoe.hue}`}
                            />
                        ))
                    }

                </ul>

                <br/>

                <h2>Tree Toppers</h2>

                <ul className="shoe-category">
                    {
                        this.getShoesByMaterialAndModel('tree', 'toppers').map(shoe => (
                            <ShoeIndexItem
                                shoe={shoe}
                                key={`${shoe.id}-${shoe.material}`}
                                key={`${shoe.id}-${shoe.material}-${shoe.hue}`}
                            />
                        ))
                    }

                </ul>
            </div>
        )
    }
}

export default ShoeIndex;

