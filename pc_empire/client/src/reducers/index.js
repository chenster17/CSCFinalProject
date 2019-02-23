import { combineReducers } from "redux";
import { cpuReducer } from "./cpuReducer";
import { filterReducer } from "./filterReducer";
import { searchReducer } from "./searchReducer";

const allReducers = combineReducers({
    cpus: cpuReducer,
    filter: filterReducer,
    search: searchReducer
});

export default allReducers;