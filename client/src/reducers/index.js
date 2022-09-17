import {combineReducers} from 'redux';

import auth from './auth'
import product from './product'
import cart from './cart'
import order from './order'

export const reducers = combineReducers({
    auth,
    product,
    cart,
    order
});