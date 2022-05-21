//-------import actions
import {
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
} from '../actions'


//-------initial State
const initialState = {
    operations: [],
    operations_to_render: [],
    balance: 0,
    categories: [],
    userName: "",
    isLoged: false,
    loginError: false,
}

function rootReducer (state = initialState, action) {
    switch (action.type){
        case LOGIN:
            console.log('action.payload', action.payload)
            return {
                ...state,
                userName: action.payload,
                isLoged: true,
                loginError: false,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                userName: "",
                isLoged: false,
                loginError: true
            }
        case LOGOUT:
            return {
                ...state,
                userName:"",
                isLoged: false
            }
        default:
             return state
    }
}

export default rootReducer

