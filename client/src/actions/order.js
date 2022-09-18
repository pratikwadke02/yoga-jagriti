import { GET_ALL_ORDERS_BY_USER } from "../constants/actionTypes";
import * as api from "../api/index.js";
import axios from "axios";

export const getAllOrdersByUser = (userId) => async (dispatch) => {
  try {
    // console.log("userId", userId);
    const { data } = await api.getAllOrdersByUser(userId);
    dispatch({ type: GET_ALL_ORDERS_BY_USER, data });
  } catch (error) {
    console.log(error);
  }
};
