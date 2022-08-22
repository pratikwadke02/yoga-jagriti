import * as actionType from '../constants/actionTypes';

const cartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            console.log(action.id);
            return { ...state, cart: [...state.cart, action.id] };
        case actionType.GET_CART:
            console.log("inside cart reducer");
            console.log(action.payload);
            return { ...state, cart: action.payload };
        default:
            return state;
    }
}

export default cartReducer;