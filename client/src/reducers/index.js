import {combineReducers} from 'redux';

import auth from './auth'
import product from './product'

export const reducers = combineReducers({
    auth,
    product
});