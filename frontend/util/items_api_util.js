export const receiveShoeItems = (gender) => {
    return $.ajax({
        url: `/api/items/${gender}`,
        method: 'GET'
    });
};