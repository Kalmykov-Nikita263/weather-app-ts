import { SET_ERROR } from "../../consts/ExportConsts";

export interface ISetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}