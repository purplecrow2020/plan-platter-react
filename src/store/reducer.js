const initialState  = {
    appName : 'PLAN_AND_PLATTER',
    menu: [],
    bestsellers: [],
    cartDetails: {
        details: null,
        total_qty: 0,
        total_bill: 0
    },
    menu_item_search_results: [],
    is_authenticated: false,
    order_history: [],
    is_order_active_by_peer: false,
    socket_connection: null,
}

export const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'SET_MENU':
            return {
                ...state,
                menu: action.payload.response.data.data
            }
            
        case 'SET_BESTSELLERS':
            return {
                ...state,
                bestsellers: action.payload.response.data.data
            }
        case 'SET_CART_DETAILS':
            return {
                ...state,
                cartDetails: action.payload.response.data.data     
            }

        case 'SET_MENU_SEARCH_RESULTS':
            return {
                ...state,
                menu_item_search_results: action.payload.response.data.data
            }
        
        case 'SET_TOKEN':
            localStorage.setItem('authKey', action.payload.response.data.data.authKey);
            return {
                ...state,
                authKey: action.payload.response.data.data.authKey,
                isAuthenticated: true
            }

        case 'SET_AUTH_FLAG':
            return {
                ...state,
                isAuthenticated: action.payload.response.flag
            }
        case 'SET_VENDOR_DETAILS':
            return {
                ...state, 
                vendor_details: action.payload.response.data.data
            }
        case 'SET_USER_ORDER_HISTORY':
            return {
                ...state, 
                order_history: action.payload.response.data.data,
            }
        case 'SET_USER_DETAILS':
            return {
                ...state, 
                user_details: action.payload.response.data.data,
            }
        case 'INITIATE_ACTIVE_ORDER_ON_TABLE_BY_PEER':
            return {
                ...state, 
                is_order_active_by_peer: true,
            }
        case 'SOCKET_CONNECTION':
            return {
                ...state, 
                socket_connection: action.payload.socket,
            }
        default:
            return state;
    }
    return state;
}