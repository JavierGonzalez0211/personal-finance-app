import axiosApi from "../../config/axiosApi";


export default function getAllOperations (direction){
    return async function (dispatch){

        let test = await axiosApi.get("operations")

        // console.log('test', test)
        
        // let {allOperations, updatedBalance} = (await clientAxios.get(`/operations?direction=${direction}`)).data

        // return dispatch ({
        //     type: GET_ALL_OPERATIONS,
        //     payload: {
        //         allOperations,
        //         updatedBalance
        //     }
        // })
    }
}