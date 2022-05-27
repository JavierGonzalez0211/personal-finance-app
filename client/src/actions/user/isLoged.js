import { IS_LOGED } from "..";



export default function IsLoged (user) {

    return {
        type: IS_LOGED,
        payload: user
    };

};
