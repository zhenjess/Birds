export const fetchCart = (user, id) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts/${id}`,
        method: 'GET'
    })
}

export const fetchCurrentCartId = (user) => {
    return $.ajax({
        url: `api/users/${user.id}`,
        method: 'GET'
    })
}

export const createCart = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}/carts`,
        method: 'POST'
    })
}