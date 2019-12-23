import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import DropDownBtn from './nav_dropbtn';
import ShoesDropdown from './nav_dropdown';


class NavbarForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollPosition: window.pageYOffset,
            isHovered: false,
            processed: false,
            dropDown: false, 
            dropDownGender: "Women",
            activeHeader: false,
            isAnimating: false,
            bounce: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({activeHeader: !!(this.state.scrollPosition || this.state.isHovered || this.state.dropDown)});
    }

    handleScroll() {
        this.setState(() => ({ scrollPosition: window.pageYOffset }));
        this.setState(state => ({ activeHeader: !!(state.scrollPosition || state.isHovered || state.dropDown )}));
    }

    handleSubmit(modal) {
        return (e) => {
            e.preventDefault();
            
            if (this.state.processed) {
                this.setState({ processed: false }, () => this.props.closeModal());
            } else {
                this.setState({ processed: true }, () => this.props.openModal(modal));
            }
        }
    }

    showDropdown(dropDownGender) {
        this.setState(state => {
            if (state.dropDown && dropDownGender !== state.dropDownGender) {
                return ({
                    dropDown: true, 
                    dropDownGender: dropDownGender,
                    isAnimating: true, 
                    bounce: true
                });
            } else if (!state.dropDown) {
                return ({
                    dropDown: true, 
                    dropDownGender: dropDownGender,
                    isAnimating: true, 
                    bounce: false
                });
            } else {
                return ({
                    dropDown: false, 
                    dropDownGender: dropDownGender,
                    bounce: false
                });
            }
        });
    }

    handleAnimation() {
        this.setState({ isAnimating: false });
    }

    render() {
        const activeHeader = this.state.activeHeader;
        const dropDown = this.state.dropDown;

        return (
            <>
            <div className={(dropDown && activeHeader) ? 'active-header with-dropdown' : (activeHeader) ? 'active-header' : 'header'} id='header'>
                <div id="navs">
                    <div className="navbar" id="nav-left">
                        <DropDownBtn
                            activeHeader={activeHeader}
                            showDropdown={this.showDropdown}
                            dropDown={this.state.dropDown}
                            dropDownGender={this.state.dropDownGender}
                            title="WOMEN"
                            id="WOMEN"
                        />
                        <DropDownBtn
                            activeHeader={activeHeader}
                            showDropdown={this.showDropdown}
                            dropDown={this.state.dropDown}
                            dropDownGender={this.state.dropDownGender}
                            title="MEN"
                            id="MEN"
                        />
                    </div>
                </div>
            </div>

            <div 
                onAnimationEnd={this.handleAnimation} 
                id="nav-dropdown" className={!this.state.dropDown ? 'invisible' : !this.state.isAnimating ? 'visible' : this.state.bounce ? 'visible swipe-up-down' : 'visible swipe-down'}>
                <ShoesDropdown gender={this.state.dropDownGender} genderQuery={this.state.dropDownGender === 'WOMEN' ? 'womens' : 'mens'} showDropdown={this.showDropdown} />
            </div>
            <div className={dropDown ? 'overlay-visible' : 'overly-invisible'}></div>
            </>
            // <div className="navbar">
            //     <div className="nav-left">
            //         <div className="dropdown-women">
            //             <span className="nav-link" to="/shoes/women">WOMEN</span>
            //             <i className="fas fa-angle-down"></i>
            //         </div>
            //         <div className="dropdown-men">
            //             <span className="nav-link" to="/shoes/women">MEN</span>
            //             <i className="fas fa-angle-down"></i>
            //         </div>
            //     </div>

            //     <div className="logo">
            //         <style>
            //             @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
            //         </style>
            //         <Link className="logo" to='/'>birds</Link>

            //     </div>

            //     <div className="nav-icons">
            //         <div className="nav-right">
            //             <div className="nav-materials">
            //                 <a href="#materials">MATERIALS</a>
            //             </div>
            //             <div className="nav-branches">
            //                 <a href="#branches">BRANCHES</a>
            //             </div>
            //         </div>
            //         <a href="#account" className="icon-button cart-button" ><i className="far fa-user icon"></i></a>
            //         <a href="?" className="icon-button cart-button" ><i className="far fa-question-circle icon"></i></a>
            //         <button className="icon-button cart-button" onClick={this.handleSubmit("shoe index")}><i className="fas fa-shopping-cart" /></button>
            //     </div>
            // </div>
        );
    }
}

export default NavbarForm;