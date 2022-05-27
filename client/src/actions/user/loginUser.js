import axiosApi from '../../config/axiosApi'
import {LOGIN, LOGIN_ERROR } from '../'


export default function loginUser (data) {
    return async function (dispatch) {
        console.log('data', data)
        try {
            await axiosApi.post('users/login', data)

            console.log("cook", document.cookie)

            const user = document.cookie?.substring(9)

            if (user) {
                console.log("hola", user)
            }

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