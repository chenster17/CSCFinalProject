import { CPU_ACTION_TYPES } from "../helpers/actionTypes";

export const cpuReducer = (state = [], action) => {
    switch (action.type) {
        case CPU_ACTION_TYPES.success:
            return action.payload.data;
        default:
            return state
    }
};
