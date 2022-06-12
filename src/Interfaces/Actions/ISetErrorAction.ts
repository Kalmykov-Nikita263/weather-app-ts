import { SET_ERROR } from "../../Constants/ExportConsts";

export interface ISetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}