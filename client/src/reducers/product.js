import * as actionType from '../constants/actionTypes';

const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_PRODUCTS:
            return { ...state, products: action.data };
        case actionType.GET_PRODUCT_BY_ID:
            console.log(action.data);
            return { ...state, product: action.data };
        default:
            return state;
    }
}

export default productReducer;