import { IAlertState } from "../types/States/Alerts/IAlertState";
import { IAlertAction } from "../types/Actions/Alerts/IAlertAction";
import { SET_ALERT } from "../consts/ExportConsts";

const initialState: IAlertState = {
    message: ''
};

export default(state = initialState, action: IAlertAction): IAlertState => {
    switch(action.type) {
        
        case SET_ALERT:
            return {
                message: action.payload
            };
        
        default:
            return state;
    }
}
