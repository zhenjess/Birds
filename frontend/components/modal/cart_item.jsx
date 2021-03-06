import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }

    increaseQuantity() {
        const quantity = this.state.quantity + 1;
        this.setState({
            quantity
        });
        this.props.updateQuantity(this.props.index, quantity);
    }

    decreaseQuantity() {
        let quantity = this.state.quantity;
        if (quantity > 1) quantity--;
        this.setState({
            quantity
        });
        this.props.updateQuantity(this.props.index, quantity);
    }

    render() {
        const { quantity } = this.state;
        const { model, material, gender, color, photoUrl, price, size, id } = this.props.item;
        const { removeFromCart } = this.props;
        return (
            <div className="cart-item-container">
                <div className="cart-item-image-container">
                    <img className="cart-image" src={photoUrl} alt="shoe" />
                </div>
                <div className="cart-item-info">
                    <div>
                        <h2>{gender}</h2>
                        <h2>{material}</h2>
                        <h2>{model}</h2>
                        <h3>{color}</h3>
                        <h3>Size : {size}</h3>
                    </div>
                    <div className="quantity-container">
                        <div className="quantity-buttons">
                            <div onClick={this.decreaseQuantity} className="change-quantity">-</div>
                            <div className="quantity-integer">{`${quantity}`}</div>
                            <div onClick={this.increaseQuantity} className="change-quantity">+</div>
                        </div>
                    </div>
                </div>
                <div className="cart-item-back-container">
                    <div className="cart-item-back">
                        <div onClick={() => removeFromCart(id, size)} className="exit">&#10005;</div>
                        <div>${price}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;

