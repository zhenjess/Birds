import React from 'react';

const dropDownBtn = ({
    activeHeader, 
    showDropdown, 
    dropDown, 
    title, 
    id, 
    dropDownGender
}) => {

    const caretOrMinus = ({ 
        dropDown, 
        gender, 
        componentGender 
    }) => {
        if (dropDown && gender === componentGender) {
            return (<h3 className="minus">&minus;</h3>);
        } else {
            return (<h3><i className="fas fa-angle-down"></i></h3>);
        }
    };

    return (
        <>
            <div className={( activeHeader ? 'a-header-button' : 'u-header-button') + ' nav-link'}
                onClick={() => showDropdown(id)}>
                    <h3>{title}</h3>
                <caretOrMinus dropDown={dropDown} gender={dropDownGender} componentGender={id}/>
            </div>
        </>
    );
};


export default dropDownBtn;