import { MOBO_ACTION_TYPES } from "../helpers/actionTypes";

export const moboReducer = (state = [], action) => {
    switch (action.type) {
        case MOBO_ACTION_TYPES.success:
            return action.payload.data;
        default:
            return state
    }
};
