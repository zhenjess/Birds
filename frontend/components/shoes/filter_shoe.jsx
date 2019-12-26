import React from 'react';

class FilterShoeItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const elements = this.props.elements.map(
            element => (
                <li className={`${this.props.id}-dropdown`}
                    onClick={() => this.props.addFilter(this.props.id, element)}
                    id={element}
                    key={element}
                ><h4>{element}</h4>
                </li>
            )
        );
        return (
            <div className="filter-elements">
                <ul className="filter-elements-box">{elements}</ul>
            </div>
        );
    }
}

export default FilterShoeItems;