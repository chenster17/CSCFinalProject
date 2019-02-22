import { combineReducers } from "redux";
import { cpuReducer } from './cpuReducer';

const allReducers = combineReducers({
    cpus: cpuReducer
});

export default allReducers;