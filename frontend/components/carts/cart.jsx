import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';

class Cart extends React.Component {
    constructor(props) {
        super(props );

        this.state = {
            subtotal: 0,
            quantity: [],
            numItems: 0,
            notificationAnimating: false,
        };

        this.updateQuantity = this.updateQuantity.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.startNotification = this.startNotification.bind(this);
        this.endNotification = this.endNotification.bind(this);
    }

    componentDidMount() {
        const { items } = this.props;
        if(items.length) {
            const subtotal = items.reduce((total, item) => item.price + total);
            this.setState({
                subtotal
            });
        }
    }

    componentDidUpdate(prevProps) {
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
        this.setState({ notificationAnimating: true });
    }

    endNotification() {
        this.setState({ notificationAnimating: false });
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

        items.forEach(item => removeFromCart(item.id, item.size ));

        if (items.length) {
            this.startNotification();
        }
    }

    render() {
        const { open, handleCartOpen, items, removeFromCart } = this.props;
        const { subtotal } = this.state;

        if (Object.values(this.props.cartItems).length > 0 && Object.values(this.props.items).length >= Object.values(this.props.cartItems).length) {

            const cartItems = items.map( (item, i) => {
                return <CartItem
                    item={item}
                    key={`${item.id}-${item.size}`}
                    index={i}
                    updateQuantity={this.updateQuantity}
                    removeFromCart={removeFromCart}
                />
            });
    
            return (
                <div className={open ? 'cart-page-container open-cart' : 'cart-page-container closed-cart'}>
                    <div onAnimationEnd={this.endNotification} className={this.state.notificationAnimating ? "fadeout notification" : "notification"}>Thank you for your purchase!</div>
                    <div className={open ? "cart-container in-front open-container" : "cart-container closed-cart"}>
                        <div className={open ? "overlay-visible open-cart" : "closed-cart"}></div>
                        <div className={open ? "cart-sidebar in-front" : "cart-sidebar closed-cart"}>
                            <div className="cart-upper-container">
                                <div className="cart-header">
                                    <h2>CART</h2>
                                    <div onClick={handleCartOpen} className="cart-close-button">&#10005;</div>
                                </div>
                                <ul className="cart-items">
                                    {cartItems}
                                </ul>
                            </div>
                        </div>
                        <div className="divider">Anything else?
                            &nbsp;
                                <Link onClick={handleCartOpen} className="shopping-link" to={'/shoes/men'}>Keep Shopping</Link>
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
                            <input onClick={this.emptyCart} className="cart-button" type="button" value="CHECKOUT"/>
                        </div>
                        <div className="cart-footer">
                            <p>Looking for more birds?</p>&nbsp;
                            <p>Click <Link className="shopping-link" onClick={handleCartOpen} to={`/shoes/men`}>here</Link></p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="empty-cart">
                    <div className="shop-links">
                        <div className="nest-text">
                            <div className="nest-img"><i class="fas fa-shopping-cart"></i></div>
                            <p>You're $50 away from free shipping</p>
                        </div>
                        <br />
                            <p>Your Cart is Empty</p>
                            <style>
                                @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                            </style>
                            <div onClick={this.handleMenModalClick} className="shop-link" >
                                <input
                                    type="submit"
                                    className="submit"
                                    value="SHOP MEN"
                                />
                            </div>
                            <div onClick={this.handleWomenModalClick} className="shop-link">
                                <input
                                    type="submit"
                                    className="submit"
                                    value="SHOP WOMEN"
                                />
                            </div>

                    </div>
                </div>
            );
        }

    }
}

export default Cart;