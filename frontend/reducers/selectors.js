//selector to help us find things in our state

export const selectAllShoes = (state) => {
    const runners = Object.values(state.entities.shoes).filter((ele) => {
        if (ele.model.toLowerCase() === 'runner') {
            return ele; //return that runner shoe
        }
    });
    //iterate through shoeMaterials slice of state
    const shoes = Object.values(state.entities.shoeMaterials).map((shoeMaterial) => {
       const shoe = state.entities.shoes[shoeMaterial.shoeId]; //to get shoe //shoe material has shoe id and use to key into shoe's slice of state 
       const material = state.entities.materials[shoeMaterial.materialId]; //to get material of shoe 
       const shoeItem = Object.assign({}, material, shoe); //shoe to override material id
       return shoeItem; //is combined shoe part and material part to return a full shoe
    });

    return shoes; //return value of selector, all shoes to see the material
};


export const selectAllShoesByGender = (state, gender) => { //gender is hardcoded by url
    // debugger
    const shoes = [];
    //iterate through shoeMaterials slice of state
    Object.values(state.entities.shoeMaterials).forEach((shoeMaterial) => {
        const shoe = state.entities.shoes[shoeMaterial.shoeId]; //to get shoe //shoe material has shoe id and use to key into shoe's slice of state 
        debugger
        if (shoe.gender.toLowerCase() === gender.toLowerCase()) {
            //find shoe, if is the gender we want then do stuff 
            const material = state.entities.materials[shoeMaterial.materialId]; //to get material of shoe 
            const shoeItem = Object.assign({}, material, shoe); //shoe to override material id
            shoes.push(shoeItem); //is combined shoe part and material part to return a full shoe
        }
    });
    debugger
    return shoes; //return value of selector, all shoes to see the material
};

