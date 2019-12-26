import FilterShoeItems from './filter_shoe';

import ShoeFilter from './shoe_filter';

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

        id (this.props.location.pathname !== prevProps.location.pathname) {
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
        
    }
}

export default Shoes;