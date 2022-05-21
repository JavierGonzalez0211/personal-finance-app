import axiosApi from '../../config/axiosApi'
import {LOGIN, LOGIN_ERROR ,LOGOUT} from '../'


export default function loginUser (data) {
    return async function (dispatch) {
        console.log('data', data)
        try {
            let userLoged = await axiosApi.post('users/login', data)
            console.log('userLoged', userLoged)

            return dispatch ({
                type: LOGIN,
                payload: data.userName 
            })

        } catch (error){
            if (error.message === "Request failed with status code 401") {
                dispatch ({
                    type: LOGIN_ERROR
                })
            } else {
                console.log(error);
            }
        }



    }
}