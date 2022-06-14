import { SET_ALERT } from "../../../consts/ExportConsts";

export interface IAlertAction {
    type: typeof SET_ALERT;
    payload: string;
}