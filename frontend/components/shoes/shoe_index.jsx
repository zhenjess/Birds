import React from 'react';

import { Route } from 'react-router-dom';

import ShoesHeader from './shoes_header';

import ShoeIndexItem from './shoe_index_item';

class ShoeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            shouldAnimate: false,
            animateItems: true,
            animateNotification: false
        };
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.clearGlobalAnimations = this.clearGlobalAnimations.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
    }
    componentDidMount() {
        // debugger
        const id = this.props.match.params.id;

        this.props.fetchShoeItems(id).then((data) => {
            this.setState({
                items: Object.values(data.items)
            });
        });

        // this.props.fetchShoe(shoeId).then((data) => {
        //     this.setState({
        //         shoes: Object.values(data.shoes),
        //     });
        // });

        this.props.fetchAllShoes();
    }

    componentDidUpdate(prevProp) {
        const id = this.props.match.params.id;
        if (this.props.location.pathname !== prevProp.location.pathname) {
            this.props.fetchShoeItems(id).then((data) => {
                this.setState({
                    items: Object.values(data.items),
                });
            });
        }
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

    handleAnimationEnd() {
        this.setState({shouldAnimate: false});
    }

    clearGlobalAnimations() {
        this.setState({animateItems: false});
    }

    startNotification() {
        this.setState({ animateNotification: true});
    }

    endNotification() {
        this.setState({ animateNotification: false });
    }

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
        const { addToCart } = this.props;
        // const filterAttrs = this.state.filterAttributes;
        // const { filterName, filterId, filterOptions } = filterAttrs;
        // debugger

        const fetchItems = () => {
            const items = this.state.items.map(item => {
                return (
                    <Item
                        startNotification={this.startNotification}
                        addToCart={this.addToCart}
                        clearGlobalAnimations={this.clearGlobalAnimations}
                        animateItems={this.state.animateItems}
                        item={item}
                        key={`${item.id}`}
                    />
                );
            });

            return (
                <ul>
                    {items}
                </ul>
            )
        }

        const items = this.props.items.length ? fetchItems() : (<div>Fetching Birds...</div>);

        return (
            <div className="shoe-index-head">
                <div onAnimationEnd={this.endNotification} 
                    className={this.state.animateNotification ? 
                    "fadeout notification" : "notification"}>Item added to your cart!</div>
                <ShoesHeader
                    gender={this.props.match.params.gender}
                />
            </div>
            
        <div className="shoe">

             {/* <div className='shoebar'>
                 <div className="right">
                    <div className="dropdowns">
                        <span className="bar-link">Size</span>

                        <div className="dropdown-items">
                            <h3>8</h3>
                        </div>
                    </div>

                    <div className="dropdowns">
                        <span className="bar-link">Hue</span>

                        <div className="dropdown-items">
                            <h3>Blue</h3>
                        </div>
                    </div>
                 </div>

             </div> */}
             
            <div className="shoe-index-text">
                <h2>Wool Runners</h2>
                
                <ul className="shoe-category">
                    {/* <div className="wool-runners-images"> */}
                        {
                            this.getShoesByMaterialAndModel('wool', 'runners').map(shoe => (
                                <ShoeIndexItem
                                    shoe={shoe}
                                    key={`${shoe.id}-${shoe.material}`}
                                    key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                key={`${shoe.id}-${shoe.material}-${shoe.color}`}
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
                                key={`${shoe.id}-${shoe.material}-${shoe.color}`}
                            />
                        ))
                    }

                </ul>
            </div>
           
        </div>
        )
    }
}

export default ShoeIndex;

