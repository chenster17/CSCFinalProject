import { combineReducers } from "redux";
import { cpuReducer } from './cpuReducer';
import { searchReducer } from "./searchReducer";

const allReducers = combineReducers({
    cpus: cpuReducer,
    search: searchReducer
});

export default allReducers;