export const selectAllShoes = state => Object.values(state.entities.shoe);

export const selectShoeItem = (state, id) => {
    return state.entities.items[id];
}