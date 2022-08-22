import { GET_CART, ADD_TO_CART } from "../constants/actionTypes";

export const addToCart = (id) => {
    console.log(id);
    return {
        type: ADD_TO_CART,
        id
    }
};

// export const getCart = () => {
//   return {
//     type: GET_CART,
//     payload: cart
//   };
// };
