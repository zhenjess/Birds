import React from 'react';

import { Link } from 'react-router-dom';

class ShoesDropdown extends React.Component {
    render () {
        return (

            <div className="nav-dropdown-box">
                <ul>
                    <Link onCLick={() => this.props.showDropdown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                        <li>
                            <div className="dropdown-shoe-img">
                                <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_grey_wool_runners.webp" alt=""/>
                            </div>
                            <h3>WOOL RUNNERS</h3>
                        </li>
                    </Link>
                    <Link onCLick={() => this.props.showDropdown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                        <li>
                            <div className="dropdown-shoe-img">
                                <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_black_tree_runners.webp" alt="" />
                            </div>
                            <h3>TREE RUNNERS</h3>
                        </li>
                    </Link>

                    <Link onCLick={() => this.props.showDropdown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                        <li>
                            <div className="dropdown-shoe-img">
                                <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_grey_wool_loungers.webp" alt="" />
                            </div>
                            <h3>WOOL LOUNGERS</h3>
                        </li>
                    </Link>
                    <Link onCLick={() => this.props.showDropdown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                        <li>
                            <div className="dropdown-shoe-img">
                                <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_black_tree_loungers.webp" alt="" />
                            </div>
                            <h3>TREE LOUNGERS</h3>
                        </li>
                    </Link>

                    <Link onCLick={() => this.props.showDropdown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                        <li>
                            <div className="dropdown-shoe-img">
                                <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_grey_tree_skippers.webp" alt="" />
                            </div>
                            <h3>TREE SKIPPERS</h3>
                        </li>
                    </Link>
                    <Link onCLick={() => this.props.showDropdown(this.props.gender)} className="attribute-link" to={`/shoes/${this.props.genderQuery}`}>
                        <li>
                            <div className="dropdown-shoe-img">
                                <img className="dropdown-show-img-item" src="https://birds-seeds.s3-us-west-1.amazonaws.com/women_black_tree_toppers.webp" alt="" />
                            </div>
                            <h3>TREE TOPPERS</h3>
                        </li>
                    </Link>
                </ul>
                
            </div>
        );
    }
}

export default ShoesDropdown;