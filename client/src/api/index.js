import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/yoga' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer $(JSON.parse(localStorage.getItem('profile')).token)`;
    }
    return req;
} , (error) => {
    return Promise.reject(error);
} );

export const login = (authInfo) => API.post('/login', authInfo);
export const register = (authInfo) => API.post('/register', authInfo);


export const getAllProducts = () => API.get('/getAllProducts');
export const getProductById = (id) => API.get(`/getProduct/${id}`);
