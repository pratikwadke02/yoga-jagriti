import {GET_ALL_PRODUCTS, ADD_TO_CART, GET_PRODUCT_BY_ID} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getAllProducts = () => async(dispatch) => {
    try{
        const {data} = await api.getAllProducts();
        console.log(data);
        dispatch({ type : GET_ALL_PRODUCTS, data });
    }catch(error){
        console.log(error);
    }
}

export const getProductById = (id) => async(dispatch) => {
    try{
        const {data} = await api.getProductById(id);
        dispatch({ type : GET_PRODUCT_BY_ID, data });
    }catch(error){
        console.log(error);
    }
}