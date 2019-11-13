import React from 'react';

import { Route } from 'react-router-dom';

import ShoeIndexItem from './shoe_index_item';

class ShoeIndex extends React.Component {
    componentDidMount() {
        // debugger
        const id = this.props.match.params.id;

        // this.props.fetchShoe(shoeId).then((data) => {
        //     this.setState({
        //         shoes: Object.values(data.shoes),
        //     });
        // });

        this.props.fetchAllShoes();
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         filterAttributes: {
    //             filterId: "",
    //             filterMaterial: "", 
    //             filterModel: ""
    //         }
    //     }
    //     this.filterShoes = this.filterShoes.bind(this);
    // }

    // filterShoes() {
    //     this.setState((state, props) => {
    //         const filters = state.filters;
    //         const shoes = props.shoes;
    //         const filteredShoes = shoes.filter(shoe => {
    //             return Object.keys(filters).every(key => filters[key] === item[key]);
    //         });

    //         return ({
    //             shoes: filteredShoes
    //         });
    //     });
    // }

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
        // const filterAttrs = this.state.filterAttributes;
        // const { filterName, filterId, filterOptions } = filterAttrs;
        return (
            <div className="shoe-index-text">
                <h2>Wool Runners</h2>
                
                <ul className="shoe-category">
                    {/* <div className="wool-runners-images"> */}
                        {
                            this.getShoesByMaterialAndModel('wool', 'runners').map(shoe => (
                                <ShoeIndexItem
                                    shoe={shoe}
                                    key={`${shoe.id}-${shoe.material}`}
                                    key={`${shoe.id}-${shoe.material}-${shoe.hue}`}
                                />
                            ))
                        }
                    {/* </div> */}
                   
                </ul>

                {/* <ul className="filter-attributes">
                        <fitler
                            
                            material={"Wool"}
                            model={"Runners"}
                        />
                </ul> */}

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

                {/* <h2>Tree Skippers</h2>

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

                </ul> */}
            </div>
        )
    }
}

export default ShoeIndex;

