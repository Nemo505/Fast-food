export const reducer = (state, action) => {
    switch (action.type) {
        case "ALL_DRINKS":
            return {...state, drinks:action.payload}
        
        case "ADD_TO_CART":
            return {...state, carts:[...state.carts,action.payload]}
        default:
            return state;
    }
};