import { SIGN_IN_ERROR } from '..'
import axiosApi from '../../config/axiosApi'


export default function SignInAction (info) {
    return async function (dispatch) {
        try {
            let response = await axiosApi.post('users', info)
            return response.data.includes("user created successfully")
            ? "success"
            : dispatch ({
                type: SIGN_IN_ERROR,
                payload: {
                    state: true,
                    message: response.data
                }
            })
        } catch (error){
                console.log(error);
            // }
        }



    }
}