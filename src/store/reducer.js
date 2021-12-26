const initialState  = {
    appName : 'PLAN_AND_PLATTER',
    menu: [],
    bestsellers: [],
    cartDetails: {
        details: [],
        total_qty: 0,
        total_bill: 0
    },
    menu_item_search_results: [],
    is_authenticated: false,
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
            console.log(action.payload.response.data.data);
            localStorage.setItem('authKey', action.payload.response.data.data.authKey);
            return {
                ...state,
                authKey: action.payload.response.data.data.authKey
            }

        case 'SET_AUTH_FLAG':
            return {
                ...state,
                authKey: action.payload.response.flag
            }
        default:
            return state;
    }
    return state;
}