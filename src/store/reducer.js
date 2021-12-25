const initialState  = {
    appName : 'PLAN_AND_PLATTER',
    menu: [],
    bestsellers: [],
    menu_item_search_results: [],
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

        case 'SET_MENU_SEARCH_RESULTS':
            return {
                ...state,
                menu_item_search_results: action.payload.response.data.data
            }

        default:
            return state;
    }
    return state;
}