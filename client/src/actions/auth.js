import {AUTH} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const login = (authInfo, router) => async(dispatch) => {
    try{
        const {data} = await api.login(authInfo);
        dispatch({ type : AUTH, data });
        router('/');
    }catch(error){
        console.log(error);
    }
};

export const register = (authInfo, router) => async(dispatch) => {
    try{
        const {data} = await api.register(authInfo);
        dispatch({ type : AUTH, data });
        router('/');
    }catch(error){
        console.log(error);
    }
}