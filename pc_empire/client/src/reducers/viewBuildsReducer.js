import {UPDATE_VIEW_BUILDS_ACTION_TYPES} from "../helpers/actionTypes";
import {LOCATION_CHANGE} from "react-router-redux";

export const viewBuildsReducer = (state = [], action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return state;
        case UPDATE_VIEW_BUILDS_ACTION_TYPES.success:
            return action.payload;
        case UPDATE_VIEW_BUILDS_ACTION_TYPES.startNewObject:
            state[action.payload.index] = {};
            return state;
        case UPDATE_VIEW_BUILDS_ACTION_TYPES.addKeyValuePair:
            state[action.payload.index][action.payload.key] = action.payload.value;
            return state;
        default:
            return state;
    }
};
