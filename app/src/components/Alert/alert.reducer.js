import { SHOW_ALERT } from "./alert.actions";

const AlertReducer = (state={},action)=>{
    switch (action.type) {
        case SHOW_ALERT: 
        return {
            ...state,
            alertShower : action.payload
        }
    
        default:
            return state;
    }
}

export default AlertReducer;