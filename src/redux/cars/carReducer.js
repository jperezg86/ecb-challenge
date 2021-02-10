import { FETCH_CARS_FAILURE, FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS } from "./carTypes"

const reducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_CARS_REQUEST: 
            return {
                ...state,
                loading: true,
                loadingMessage : 'Loading Car models, please wait....'        
            }
        case FETCH_CARS_SUCCESS: 
            return {
               loading : false,
               cars : action.payload,
            }
        case FETCH_CARS_FAILURE:
            return {
                loading: false,
                cars : [],
                error : action.payload
            }
        default: 
            return state;
    }
}

export default reducer