import FilterShoeItems from './filter_shoe';

import ShoeFilter from './shoe_filter';
import ShoeIndexItem from './shoe_index_item';
import ShoesHeader from './shoes_header';

class Shoes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openFilter: false, 
            filters: {}, 
            items: [], 
            filterInfo: {
                filterTitle: "", 
                filterId: "", 
                filterElements: []
            },
            willAnimate: false, 
            animateItem: true, 
            startAnimate: false
        };

        this.filterItems = this.filterItems.bind(this);
        this.addFilter = this.addFilter.bind(this);
        this.clearAllFilters = this.clearAllFilters.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.clearAnimations = this.clearAnimations.bind(this);
        this.loadedImage = this.loadedImage.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.fetchItems(id).then((data) => {
            this.setState({
                items: Object.values(data.items)
            });
        });
    }

    componentDidUpdate(prevProp) {
        const id = this.props.match.params.id;

        if (this.props.location.pathname !== prevProp.location.pathname) {
            this.props.fetchItems(id).then((data) => {
                this.setState({
                    items: Object.values(data.items)
                });
            });
        }
    }

    filterItems() {
        this.setState((state, props) => {
            const filters = state.filters;
            const items = props.items;
            const filterItems = items.filter(item => {
                return Object.keys(filters).every(key => filters[key] === item[key]);
            });
            return ({
                items: filterItems
            });
        });
    }

    addFilter(k, v) {
        this.setState(state => {
            const newFilter = Object.assign({}, state.filters, { [k]: v });
            return ({
                filters: newFilter, 
                animateItem: true
            });
        }, 
        this.filterItems
        );
    }

    clearAllFilters() {
        this.setState(() => ({
            filters: {}, 
            animateItem: true
        }),
        this.filterItems 
        );
    }

    clearFilter(key) {
        this.setState(state => {
            let newFilters = Object.assign({}, state.filters);
            delete newFilters[key];
            return ({
                filters: newFilters,
                animateItem: true
            });
        },
        this.filterItems
        );
    }

    handleFilter(title, id, elements) {
        return () => this.setState( ({ openFilter, filterInfo}) => {
            const newFilterInfo = {
                filterTitle: title, 
                filterId: id, 
                filterElements: elements
            };

            if (openFilter && title !== filterInfo.filterTitle) {
                return ({ filterInfo: newFilterInfo, openFilter: true, willAnimate: true });
            } else if (!openFilter) {
                return ({ filterInfo: newFilterInfo, openFilter: true, willAnimate: true });
            } else {
                return ({ openFilter: false });
            }
        });
    }

    handleAnimationEnd() {
        this.setState({ willAnimate: false });
    }

    clearAnimations() {
        this.setState({ animateItem: false });
    }

    loadedImage() {
        this.setState({ loading: false });
    }

    startNotification() {
        this.setState({ startAnimate: true });
    }

    endNotification() {
        this.setState({ startAnimate: false });
    }

    render() {
        const filterAttrs = this.state.filterInfo;
        const { addToCart } = this.props;
        const { filterTitle, filterId, filterElements } = filterAttrs;
        const handleFilter = this.handleFilter;
        const clearFilter = this.clearFilter;

        const populateItems = () => {
            const shoeItems = this.state.shoeItems.map(shoeItem => {
                return (
                    <ShoeIndexItem
                        startNotification={this.startNotification}
                        addToCart={addToCart}
                        clearAnimations={clearAnimations}
                        animateItem={this.state.animateItem}
                        shoeItem={shoeItem}
                        key={`${shoeItem.id}`}
                    />
                );
            });

            return (
                <ul>
                    {shoeItems}
                </ul>
            );
        }

        return (
            <>
            <Loading isLoading={this.state.loading}/>
            <div>
                <div onAnimationEnd={this.endNotification} className={this.state.startAnimate ? "fadeout note" : "note"}>
                    Item added to cart!
                </div>
                <ShoesHeader loadedImage={this.loadedImage} gender={this.props.match.params.id}/>
                <div className="shoe-index-items">
                    <div className="filter">
                        <div>{`${!!(Object.keys(this.state.filters).length) ? "" : "All - "} ${this.state.items.length} Results`}</div>
                        <div className="nav-filter">
                            <div onClick={this.clearAllFilters}
                                 className={!!(Object.keys(this.state.filters).length) ? "clear-filters" : "hide-clear-filters"}
                            >CLEAR FILTERS
                            </div>

                            <ul className="filter-attributes">
                                <ShoeFilter
                                    handleFilter={handleFilter}
                                    title={"Size"}
                                    id={"size"}
                                    elements={["7", "8", "9", "10", "11", "12"]}
                                    whatFilter={this.state.filters.size}
                                    openFilter={this.state.openFilter}
                                    currentFilter={filterTitle}
                                    clearFilter={clearFilter}
                                />
                                <ShoeFilter
                                    handleFilter={handleFilter}
                                    title={"Hue"}
                                    id={"hue"}
                                    elements={["Grey", "Black", "White", "Red", "Green", "Blue"]}
                                    whatFilter={this.state.filters.size}
                                    openFilter={this.state.openFilter}
                                    currentFilter={filterTitle}
                                    clearFilter={clearFilter}
                                />
                                <ShoeFilter
                                    handleFilter={handleFilter}
                                    title={"Model"}
                                    id={"model"}
                                    elements={["Runners", "Loungers", "Skippers", "Toppers"]}
                                    whatFilter={this.state.filters.size}
                                    openFilter={this.state.openFilter}
                                    currentFilter={filterTitle}
                                    clearFilter={clearFilter}
                                />
                                <ShoeFilter
                                    handleFilter={handleFilter}
                                    title={"Material"}
                                    id={"material"}
                                    elements={["Tree", "Wool"]}
                                    whatFilter={this.state.filters.size}
                                    openFilter={this.state.openFilter}
                                    currentFilter={filterTitle}
                                    clearFilter={clearFilter}
                                />
                            </ul>
                        </div>
                    </div>
                    <div onAnimationEnd={this.handleAnimationEnd} className={(this.state.openFilter ? "open-filter" : "close-filter") + 
                        (this.state.willAnimate ? "animate" : "") + "filter-dropdown"}>
                        <FilterShoeItems title={filterTitle} id={filterId} elements={filterElements} addFilter={this.addFilter}/>
                    </div>
                    {items}
                </div>
                <footer></footer>
            </div>
            </>
        );
    }
}

export default Shoes;