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
//    return [];
    const shoes = [];
     Object.values(state.entities.shoeOptions).forEach((shoeOption) => {
        const shoe = state.entities.shoes[shoeOption.shoeId];

        if (shoe.gender.toLowerCase() === gender.toLowerCase()) {
            const color = state.entities.colors[shoeOption.colorId];
            const material = state.entities.materials[shoeOption.materialId];
    
            const shoeItem = Object.assign({}, color, material, shoe);
            shoes.push(shoeItem);
        }
     })
     return shoes;

    //iterate through shoeMaterials slice of state
    // Object.values(state.entities.shoeMaterials).forEach((shoeMaterial) => {
       
    //     const shoe = state.entities.shoes[shoeMaterial.shoeId]; //to get shoe //shoe material has shoe id and use to key into shoe's slice of state 
    //     // debugger
    //     if (shoe.gender.toLowerCase() === gender.toLowerCase()) {
    //         //find shoe, if is the gender we want then do stuff 
    //         const material = state.entities.materials[shoeMaterial.materialId]; //to get material of shoe 
            
            
    //         let shoeItem;
    //         Object.values(state.entities.shoeColors).forEach((shoeColor) => {

    //             if (shoe.id === shoeColor.shoeId) {
    //                 //debugger
    //                 const color = state.entities.colors[shoeColor.hueId];
    //                 shoeItem = Object.assign({}, color, material, shoe); //shoe to override material id //if shoe id match shoe color make shoe item to color
    //                 shoes.push(shoeItem); //is combined shoe part and material part to return a full shoe
    //             }
    //         })
            //remove these lines when shoe has color
            // shoeItem = Object.assign({}, material, shoe); //if no color add to shoe
            // shoes.push(shoeItem); //is combined shoe part and material part to return a full shoe
    //     }
    // });
    // // debugger
    // return shoes; //return value of selector, all shoes to see the material
};

