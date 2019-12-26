import React from 'react';

import DropDownBtn from './shoe_filter_dropdown';

class ShoeFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnimating: false
        };
        this.handleAnimation = this.handleAnimation.bind(this);
    }

    handleAnimation() {
        this.setState({ isAnimating: false });
    }

    componentDidUpdate(prevProp) {
        if (this.props.whatFilter !== prevProp.whatFilter) {
            this.setState({
                isAnimating: true
            });
        }
    }

    render() {
        const openFilter = this.props.openFilter;
        const currentFilter = this.props.currentFilter;
        const title = this.props.title;
        const id = this.props.id;
        const elements = this.props.elements;
        const clearFilter = this.props.clearFilter;
        const whatFilter = this.props.whatFilter;
        const handleFilter = this.props.handleFilter;

        return (
            <div className="filter-elements">
                <h2 
                    className={this.state.isAnimating ? "filter" : ""}
                    onAnimationEnd={this.handleAnimation}
                    onClick={handleFilter(title, id, elements)}>
                        {whatFilter || title}
                </h2>
                <DropDownBtn 
                    openFilter={openFilter}
                    currentFilter={currentFilter}
                    title={title}
                    id={id}
                    elements={elements}
                    clearFilter={clearFilter}
                    whatFilter={whatFilter}
                    handleFilter={handleFilter}
                />
            </div>
        );
    }

}

export default ShoeFilter;