import { combineReducers } from "redux";
import { brandsReducer } from "./brandsReducer";
import { cpuReducer } from "./cpuReducer";
import { filterReducer } from "./filterReducer";
import { pricesReducer }  from "./pricesReducer";
import { searchReducer } from "./searchReducer";


const allReducers = combineReducers({
    brands: brandsReducer,
    cpus: cpuReducer,
    filter: filterReducer,
    prices: pricesReducer,
    search: searchReducer
});

export default allReducers;
