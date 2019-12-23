import React from 'react';

const dropDownBtn = ({ activeHeader, showDropdown, dropDown, title, id, dropDownGender }) => {
    const dropOrNot = ({ dropDown, gender, componentGender }) => {
        if (dropDown && gender === componentGender) {
            return (<h5 className="minus">&minus;</h5>);
        } else {
            return (<h5 className="downCaret"><i className="fas fa-angle-down"></i></h5>);
        }
    };

    return (
        <>
        <div className={(activeHeader ? 'a-header-button' : 'u-header-button') + ' nav-link'}
                onClick={() => showDropdown(id)}>
                <h2>{title}</h2>
                <dropOrNot dropDown={dropDown} gender={dropDownGender} componentGender={id}/>
        </div>
        </>
    )
};

export default dropDownBtn;
