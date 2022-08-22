import {GET_ALL_PRODUCTS, ADD_TO_CART} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getAllProducts = () => async(dispatch) => {
    try{
        const {data} = await api.getAllProducts();
        dispatch({ type : GET_ALL_PRODUCTS, data });
    }catch(error){
        console.log(error);
    }
}

