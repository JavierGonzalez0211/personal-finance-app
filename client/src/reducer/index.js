//-------import actions
import {
    IS_LOGED,
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    SIGN_IN_ERROR
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
    signInError: { // true when userName or email already exist
        state: false,
        message:"",
    },
    }  

function rootReducer (state = initialState, action) {
    switch (action.type){
        case IS_LOGED:
            return {
                ...state,
                isLoged: true,
                userName: action.payload,
            }
        case LOGIN:
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
        case SIGN_IN_ERROR:
            return {
                ...state,
                signInError: {
                    state: action.payload.state,
                    message: action.payload.message
                }
            }
        default:
             return state
    }
}

export default rootReducer

