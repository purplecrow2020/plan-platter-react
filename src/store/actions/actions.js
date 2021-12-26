import * as API_CALLS from './apiCall.js';


export const healthCheckApi = ()=>{
    return async (dispatch) => {
        let api_resp = await API_CALLS.healthCheck();
        dispatch({type : 'HEALTH_CHECK', payload : {response  :api_resp}});
    }
}

export const getMenuApi = (filters)=>{
    return async (dispatch) => {
        let api_resp = await API_CALLS.getMenu(filters);
        dispatch({type : 'SET_MENU', payload : {response  :api_resp}});
    }
}

export const getBestSellerApi = (filters)=>{
    return async (dispatch) => {
        let api_resp = await API_CALLS.getBestSellers(filters);
        dispatch({type : 'SET_BESTSELLERS', payload : {response  :api_resp}});
    }
}

export const getCartDetails = ()=>{
    return async (dispatch) => {
        let api_resp = await API_CALLS.getCartDetails();
        dispatch({type : 'SET_CART_DETAILS', payload : {response  :api_resp}});
    }}

export const getMenuSearchesApi = (item_search_string)=>{
    return async (dispatch) => {
        let api_resp = await API_CALLS.getMenuSearches({item_search_string});
        console.log(api_resp);
        dispatch({type : 'SET_MENU_SEARCH_RESULTS', payload : {response  :api_resp}});
    }
}

// export const getMenuSearchesApi = (item_search_string)=>{
//     return async (dispatch) => {
//         let api_resp = await API_CALLS.getMenuSearches({item_search_string});
//         console.log(api_resp);
//         dispatch({type : 'SET_MENU_SEARCH_RESULTS', payload : {response  :api_resp}});
//     }
// }

export const signUp = (req_body) => {
    return async (dispatch) => {
        let api_resp = await API_CALLS.signUp({...req_body});
        dispatch({type : 'SET_TOKEN', payload : {response: api_resp}});
    }
}

export const login = (req_body) => {
    return async (dispatch) => {
        let api_resp = await API_CALLS.login({...req_body});
        dispatch({type : 'SET_TOKEN', payload : {response: api_resp}});
    }
}