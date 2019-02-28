import { combineReducers } from "redux";
import { cpuReducer } from './cpuReducer';
import { searchReducer } from "./searchReducer";

import { moboReducer } from './moboReducer';

const allReducers = combineReducers({
    cpus: cpuReducer,
    search: searchReducer
});

export default allReducers;
