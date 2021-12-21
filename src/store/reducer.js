const initialState  = {
    appName : 'PLAN_AND_PLATTER',
    menu: []
}

export const rootReducer = (state=initialState, action) =>{
    switch (action.type) {
        case 'SET_MENU':
            console.log(action.payload.response);
            return {
                ...state,
                menu: action.payload.response.data.data
            }
            
        default:
            return state;
    }
    return state;
}