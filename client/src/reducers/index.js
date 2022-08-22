import {combineReducers} from 'redux';

import auth from './auth'
import product from './product'
import cart from './cart'

export const reducers = combineReducers({
    auth,
    product,
    cart
});