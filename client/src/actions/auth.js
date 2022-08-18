import {AUTH} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const login = (authInfo, router) => {
    try{
        const {data} = await api.login(authInfo);
        dispatch({ type : AUTH, data });
        router.push('/');
    }catch(error){
        console.log(error);
    }
};

export const register = (authInfo, router) => {
    try{
        const {data} = await api.register(authInfo);
        dispatch({ type : AUTH, data });
        router.push('/');
    }catch(error){
        console.log(error);
    }
}