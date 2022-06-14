import { SET_ALERT } from "../consts/ExportConsts";
import { IAlertAction } from "../types/Actions/Alerts/IAlertAction";

export const setAlert = (message: string): IAlertAction => {
    return {
        type: SET_ALERT,
        payload: message
    };
}