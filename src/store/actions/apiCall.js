import axios from "axios";

import * as API_ENPOINTS from  './apiEndpoint';

// const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUyNDY0MSwiaWF0IjoxNTcxOTA5Mzg3LCJleHAiOjE2MzQ5ODEzODd9.xTMTMW1bF2KpQcIcC1TCIrimevK7kM-GzIQ0sMqqtZQ';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAxMzE0MCwiaWF0IjoxNTc5OTAwNjE1LCJleHAiOjE2NDI5NzI2MTV9.uchonJuPhgQslvE4n4jHH2rJbGHMu_eNognx3FypaD4';
export const healthCheck = async () =>{
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.healthCheck}`);
}

export const getMenu = async (f) =>{
    const authKey = localStorage.getItem('authKey');
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getMenu}`, {headers: {'x-auth-token': authKey}});
}

export const getBestSellers = async () => {
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getBestSellers}`);
}

export const getCartDetails = async () => {
    const authKey = localStorage.getItem('authKey');
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getCartDetails}`, {headers: {'x-auth-token': authKey}});
}

export const addItemToCart = async (req_data) => {
    const authKey = localStorage.getItem('authKey');
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.addItemToCart}`, req_data, {headers: {'x-auth-token': authKey}});
}

export const deleteItemFromCart = async (req_data) => {
    const authKey = localStorage.getItem('authKey');
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.deleteItemFromCart}`, req_data, {headers: {'x-auth-token': authKey}});
}

export const getMenuSearches = async (req_body) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getMenuSearches}`,  {...req_body});
}

export const signUp = async (req_body) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.signUp}`,  {...req_body});
}
export const login = async (req_body) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.login}`,  {...req_body});
}


