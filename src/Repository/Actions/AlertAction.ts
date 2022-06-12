import { SET_ALERT } from "../Constants/ExportConsts";
import { IAlertAction } from "../Interfaces/Actions/Alerts/IAlertAction";

export const SetAlert = (message: string): IAlertAction => {
    return {
        type: SET_ALERT,
        payload: message
    };
}