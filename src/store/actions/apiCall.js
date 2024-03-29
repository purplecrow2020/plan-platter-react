import axios from "axios";

import * as API_ENPOINTS from  './apiEndpoint';

// const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUyNDY0MSwiaWF0IjoxNTcxOTA5Mzg3LCJleHAiOjE2MzQ5ODEzODd9.xTMTMW1bF2KpQcIcC1TCIrimevK7kM-GzIQ0sMqqtZQ';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAxMzE0MCwiaWF0IjoxNTc5OTAwNjE1LCJleHAiOjE2NDI5NzI2MTV9.uchonJuPhgQslvE4n4jHH2rJbGHMu_eNognx3FypaD4';
export const healthCheck = async () =>{
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.healthCheck}`);
}

export const getMenu = async (f) =>{
    const authKey = localStorage.getItem('authKey');
    const vendor_id = localStorage.getItem('vendor_id');
    const table_id = localStorage.getItem('table_id');
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getMenu}`, {
        headers: {
            'x-auth-token': authKey,
            vendor_id, 
            table_id,
        }});
}

export const getBestSellers = async () => {
    const authKey = localStorage.getItem('authKey');
    const vendor_id = localStorage.getItem('vendor_id');
    const table_id = localStorage.getItem('table_id');

    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getBestSellers}`, {
        headers: {
            'x-auth-token': authKey,
            vendor_id, 
            table_id,
        }
    });
}

export const getCartDetails = async () => {
    const authKey = localStorage.getItem('authKey');
    const vendor_id = localStorage.getItem('vendor_id');
    const table_id = localStorage.getItem('table_id');
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getCartDetails}`, {headers: {
        'x-auth-token': authKey,
        vendor_id, 
        table_id,
    }});
}

export const addItemToCart = async (req_data) => {
    const authKey = localStorage.getItem('authKey');
    const vendor_id = localStorage.getItem('vendor_id');
    const table_id = localStorage.getItem('table_id');
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.addItemToCart}`, req_data, {headers: {
        'x-auth-token': authKey,
        vendor_id, 
        table_id,
    }});
}

export const deleteItemFromCart = async (req_data) => {
    const authKey = localStorage.getItem('authKey');
    const vendor_id = localStorage.getItem('vendor_id');
    const table_id = localStorage.getItem('table_id');
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.deleteItemFromCart}`, req_data, {headers: {
        'x-auth-token': authKey,
        vendor_id, 
        table_id,
    }});
}

export const addQuickRequest = async (req_data) => {
    const authKey = localStorage.getItem('authKey');
    const vendor_id = localStorage.getItem('vendor_id');
    const table_id = localStorage.getItem('table_id');
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.addQuickRequest}`, req_data, {headers: {
        'x-auth-token': authKey,
        vendor_id, 
        table_id,
    }});
}

export const getMenuSearches = async (req_body) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getMenuSearches}`,  {...req_body});
}

export const signUp = async (req_body) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.signUp}`,  {...req_body});
}


export const guestLogin = async (req_body) => {
    const authKey = localStorage.getItem('authKey');
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.guestLoginUpdate}`,  {...req_body}, {
        headers: {
            'x-auth-token': authKey,
        }
    });
}

export const login = async (req_body) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.login}`,  {...req_body});
}

export const getVendorDetails = async () => {
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getVendorDetails}`);
}

export const getUserOrderHistory = async () => {
    const authKey = localStorage.getItem('authKey');
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getUserOrderHistory}`, {headers: {'x-auth-token': authKey}});
}

export const loginAsGuest = async (req_body) => {
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.loginAsGuest}`,  {...req_body});
}

export const orderAddItems = async (req_data) => {
    const authKey = localStorage.getItem('authKey');
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.orderAddItems}`, req_data, {headers: {'x-auth-token': authKey}});
}

export const completeOrder = async (req_data) => {
    const authKey = localStorage.getItem('authKey');
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.completeOrderByPayment}`, req_data, {headers: {'x-auth-token': authKey}});
}

export const initiatePaymentRequest = async (req_data) => {
    const authKey = localStorage.getItem('authKey');
    return axios.post(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.initiatePaymentRequest}`, req_data, {headers: {'x-auth-token': authKey}});
}

export const getUserDetails = async () => {
    const authKey = localStorage.getItem('authKey');
    return axios.get(`${API_ENPOINTS.baseUrl}${API_ENPOINTS.getUserDetails}`, {headers: {'x-auth-token': authKey}});
}
