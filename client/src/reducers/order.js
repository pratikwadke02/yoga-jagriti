import * as actionType from '../constants/actionTypes';

const orderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_ORDERS_BY_USER:
            return { ...state, orders: action.data };
        default:
            return state;
    }
}

export default orderReducer;