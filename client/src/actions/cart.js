import { INCREMENT, DECREMENT, ADD_TO_CART, CLEAR_CART } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const addToCart = (data) => async(dispatch) => {
    try{
        console.log(data);
        dispatch(
            {
                type: ADD_TO_CART,
                data
            }
        )
    }catch(error){
        console.log(error);
    }
};

export const Increment = (id) => async(dispatch) => {
    console.log(id);
    try{
        dispatch(
            {
                type: INCREMENT,
                id
            }
        )
    }catch(error){
        console.log(error);
    }
}

export const Decrement = (id) => async(dispatch) => {
    try{
        dispatch(
            {
                type: DECREMENT,
                id
            }
        )
    }catch(error){
        console.log(error);
    }
}

export const clearCart = () => async(dispatch) => {
    try{
        dispatch(
            {
                type: CLEAR_CART
            }
        )
    }catch(error){
        console.log(error);
    }
}