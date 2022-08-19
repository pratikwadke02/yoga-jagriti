import * as actionType from '../constants/actionTypes';

const productReducer = (state = { products: null }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_PRODUCTS:
            return { ...state, products: action.data };
        default:
            return state;
    }
}

export default productReducer;