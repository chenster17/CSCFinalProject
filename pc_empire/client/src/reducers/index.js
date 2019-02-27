import { combineReducers } from "redux";
import { brandsReducer } from "./brandsReducer";
import { cpuReducer } from "./cpuReducer";
import { moboReducer } from './moboReducer';
import { filterReducer } from "./filterReducer";
import { pricesReducer }  from "./pricesReducer";
import { searchReducer } from "./searchReducer";


const allReducers = combineReducers({
    brands: brandsReducer,
    CPU: cpuReducer,
    Motherboard: moboReducer,
    filter: filterReducer,
    prices: pricesReducer,
    search: searchReducer
});

export default allReducers;