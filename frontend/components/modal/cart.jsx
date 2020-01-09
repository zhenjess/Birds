import React from 'react';

import { Link } from 'react-router-dom';


import ShoeIndex from '../shoes/shoe_index';

import ShoeIndexContainer from '../shoes/shoe_index_container';

import CartItem from './cart_item';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processed: false, 
            subtotal: 0,
            quantity: [],
            numItems: 0,
            animateNotification: false,          
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMenModalClick = this.handleMenModalClick.bind(this);
        this.handleWomenModalClick = this.handleWomenModalClick.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const shop = this.props.shop;
        const user = Object.assign({}, this.state);
        shop(user);
        this.setState({ processed: true });
    }

    componentDidMount() {
        const { items } = this.props;
        if (items.length) {
            this.props.openModal('shoe index', this.props.cart);
            const subtotal = items.reduce((total, item) => item.price + total);
            this.setState({
                subtotal
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { items } = this.props;
        if (items.length !== prevProps.items.length) {
            let subtotal = 0;
            items.forEach(item => {
                subtotal += item.price;
            });
            this.setState({ subtotal });

            const quantity = Array.from(this.state.quantity);
            quantity.push(1);
            this.setState({ quantity });
        }
    }

    startNotification() {
        this.setState({ animateNotification: true });
    }

    endNotification() {
        this.setState({ animateNotification: false });
    }

    updateQuantity(idx, val) {
        let quantity = Array.from(this.state.quantity);

        quantity[idx] = val;
        this.setState(() => ({ quantity }));

        const { items } = this.props;

        let subtotal = 0;
        let numItems = 0;
        items.forEach((item, i) => {
            subtotal = item.price * quantity[i] + subtotal;
            numItems += quantity[i];
        });
        this.setState(() => ({ subtotal }));
        this.setState(() => ({ numItems }));
    }

    emptyCart() {
        const { items, removeFromCart } = this.props;
        items.forEach(item => removeFromCart(item.id, item.size));
        if (items.length) {
            this.startNotification();
        }
    }


    renderErrors() {
        if (this.state.processed) {
            return (
                <div>e
                    <ul>
                        {
                            this.props.errors.map( (error, i) => (
                                <li key={`error-${i}`}>{error}</li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
    }

    handleMenModalClick() {
        this.props.history.push('/shoes/men')
        this.props.closeModal()
    }

    handleWomenModalClick() {
        this.props.history.push('/shoes/women')
        this.props.closeModal()
    }

    render() {
        const { open, items, removeFromCart} = this.props;
        const { subtotal } = this.state;

        const cartItems = items.map((item, i) => {
            return <CartItem
                model={item.model}
                material={item.material}
                gender={item.gender}
                color={item.color}
                photoUrl={item.photoUrl}
                price={item.price}
                size={item.size}
                id={item.id}
                key={`${item.id}-${item.size}`}
                index={i}
                updateQuantity={this.updateQuantity}
                removeFromCart={removeFromCart}
            />
        });
        debugger
        return (
            // // <div className={open ? "cart-page-container open-cart" : "cart-page-container closed-cart"}>
            //     <div onAnimationEnd={this.endNotification} className={this.state.animateNotification ? "fadeout notification" : "notification"}>Thank you for your purchase!</div>
            //     {/* <div className={open ? "cart-container in-front open-container" : "cart-container closed-cart"}>
            //         <div className={open ? "overlay-visible open-cart" : "closed-cart"}></div>
            //         <div className={open ? "cart-sidebar in-front" : "cart-sidebar closed-cart"}> */}
            //             <div className="cart-upper-conatiner">
            //                 <div className="cart-header">
            //                     <h2>CART</h2>
            //                     <div className="cart-img"><i className="fas fa-shopping-cart"></i></div>
            //                     {/* <div onClick={handleOpenCart} className="cart-close-button">&#10005;</div> */}
            //                 </div>
            //                 <ul className="cart-items">
            //                     {cartItems}
            //                 </ul>
            //             </div>
            //             <div>
            //                 <div className="divider">Looking for something else?
            //                         &nbsp;
            //                 {/* <Link onClick={handleOpenCart} className="shopping-link" to={'/shoes/women'}>Shop Women</Link>
            //                     <Link onClick={handleOpenCart} className="shopping-link" to={'/shoes/men'}>Shop Men</Link> */}
            //                 </div>
            //                 <div className="cart-totals">
            //                     <div className="cart-costs">
            //                         <h3>Subtotal</h3>
            //                         <div>${subtotal}</div>
            //                     </div>
            //                     <div className="cart-costs">
            //                         <h3>Shipping</h3>
            //                         <div>FREE</div>
            //                     </div>
            //                     <input onClick={this.emptyCart} className="cart-button" type="button" value="CHECKOUT" />
            //                 </div>
            //                 <div className="cart-footer">
            //                     <p>Looking for more shoes?</p>&nbsp;
            //                     <p>Click<Link className="shopping-link" onClick={this.handleWomenModalClick} to={'/shoes/women'}>here for Women</Link></p>
            //                     <p>Click<Link className="shopping-link" onClick={this.handleMenModalClick} to={'/shoes/men'}>here for Men</Link></p>
            //                 </div>
            //             </div>
            //         // </div>
            //     // </div>
            // // </div>  
            <div>   
            <div onAnimationEnd={this.endNotification} className={this.state.animateNotification ? "fadeout notification" : "notification"}>Thank you for your purchase!</div>   
            <div className="cart-upper-conatiner">
                            <div className="cart-header">
                                 <h2>CART</h2>
                                <div className="cart-img"><i className="fas fa-shopping-cart"></i></div>
                            </div>
                             <ul className="cart-items">
                                 {cartItems}
                             </ul>
            </div>
                         <div>
                             <div className="divider">Looking for something else?
                                     {/* &nbsp; */}
                    
                             </div>
                             <div className="cart-totals">
                                 <div className="cart-costs">
                                     <h3>Subtotal</h3>
                                     <div>${subtotal}</div>
                                 </div>
                                 <div className="cart-costs">
                                     <h3>Shipping</h3>
                                     <div>FREE</div>
                                 </div>
                                 <input onClick={this.emptyCart} className="cart-button" type="button" value="CHECKOUT" />
                            </div>
                            <div className="cart-footer">
                                 <p>Looking for more shoes?</p>&nbsp;
                                 <p>Click<Link className="shopping-link" onClick={this.handleWomenModalClick} to={'/shoes/women'}>here for Women</Link></p>
                                 <p>Click<Link className="shopping-link" onClick={this.handleMenModalClick} to={'/shoes/men'}>here for Men</Link></p>
                            </div>
                        </div>
            </div>
        );
    }

}

export default Cart;


