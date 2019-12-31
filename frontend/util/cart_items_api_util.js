//takes in cart and allow fetch items in older cart
export const fetchCartItems = (user, cart) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts/${cart.id}/cart_items`,
        method: 'GET'
    })
}

//takes in cart to fetch items in older carts
export const fetchCartItem = (user, cart, item) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts/${cart.id}/cart_items/${item.id}`,
        method: 'GET'
    })
}

//can add items to current users cart
export const createCartItem = (user, cartItems) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts/${user.cart_id}/cart_items`, 
        method: 'POST', 
        data: { cartItems } 
    })
}

//can update items in users current cart
//cartItems as opposed to cartItem since thats what controller params requires
export const updateCartItem = (user, cartItems) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts/${user.cart_id}/cart_items/${cartItems.id}`, 
        method: 'PATCH', 
        data: { cartItems }
    })
}

//allow delete items from users current cart
export const deleteCartItem = (user, item) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts/${user.cart_id}/cart_items/${item.id}`,
        method: 'DELETE'
    })
}