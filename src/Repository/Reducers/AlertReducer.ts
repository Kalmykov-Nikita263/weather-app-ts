import { IAlertState } from "../Interfaces/States/Alerts/IAlertState";
import { IAlertAction } from "../Interfaces/Actions/Alerts/IAlertAction";
import { SET_ALERT } from "../Constants/ExportConsts";

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
