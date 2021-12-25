import axios from "axios";

import * as API_ENPOINTS from  './apiEndpoint';

// const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUyNDY0MSwiaWF0IjoxNTcxOTA5Mzg3LCJleHAiOjE2MzQ5ODEzODd9.xTMTMW1bF2KpQcIcC1TCIrimevK7kM-GzIQ0sMqqtZQ';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAxMzE0MCwiaWF0IjoxNTc5OTAwNjE1LCJleHAiOjE2NDI5NzI2MTV9.uchonJuPhgQslvE4n4jHH2rJbGHMu_eNognx3FypaD4';
export const healthCheck = async () =>{
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.healthCheck}`);
}

export const getMenu = async (f) =>{
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getMenu}`);
}

export const getBestSellers = async () => {
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getBestSellers}`);
}

export const getCartDetails = async () => {
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getCartDetails}`);
}

export const addItemToCart = async (req_data) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.addItemToCart}`, req_data);
}

export const deleteItemFromCart = async (req_data) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.deleteItemFromCart}`, req_data);
}

export const getMenuSearches = async (req_body) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getMenuSearches}`,  {...req_body});
}