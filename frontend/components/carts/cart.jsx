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

        const cartItems = items.map( (item, i) => {
            return <CartItem
                item={item}
                key={}
            />
        });
    }
}

export default Cart;