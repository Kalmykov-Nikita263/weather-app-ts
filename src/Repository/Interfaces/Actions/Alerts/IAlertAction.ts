import { SET_ALERT } from "../../../Constants/ExportConsts";

export interface IAlertAction {
    type: typeof SET_ALERT;
    payload: string;
}