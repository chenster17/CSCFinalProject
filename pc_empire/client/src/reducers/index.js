import { combineReducers } from "redux";
import { cpuReducer } from './cpuReducer';

import { moboReducer } from './moboReducer';

const allReducers = combineReducers({
    CPU: cpuReducer,
    Motherboard: moboReducer
});

export default allReducers;
