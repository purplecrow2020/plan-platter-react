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