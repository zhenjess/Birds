import React from 'react';

const dropDownBtn = ({ openFilter, currentFilter, title, id, elements, clearFilter, whatFilter, handleFilter }) => {
    if (whatFilter) {
        return (
            <h5 className="x" onClick={() => clearFilter(id)}>&#10005;</h5>
        );
    } else if (openFilter && currentFilter === title) {
        return (
            <h5 className="minus" onClick={handleFilter(title, id, elements)}>&minus;</h5>
        );
    } else {
        return (
            <h5 className="dropdown" onClick={handleFilter(title, id, elements)}><i className="fas fa-angle-down"></i></h5>
        );
    }
};

export default dropDownBtn;