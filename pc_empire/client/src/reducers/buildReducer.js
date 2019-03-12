import {BUILD_ITEM_ACTION_TYPES} from "../helpers/actionTypes";

const initialState = {
    CPU: 0,
    Motherboard: 0,
    GPU: [],
    PS: 0,
    RAM: [],
    Storage: [],
    Case: 0
};

export const handleAdd = (event) => {
    const ptype = event.currentTarget.producttype;
    const id = event.currentTarget.value;
    switch(ptype){
        case "CPU":
            dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.cpu, payload: id });
        case "Motherboard":
            dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.mobo, payload: id });
        case "GPU":
            dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.gpu, payload: id });
        case "Power Supply":
            dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.ps, payload: id });
        case "RAM":
            dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.ram, payload: id });
        case "Storage":
            dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.storage, payload: id });
        case "Case":
            dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.'case', payload: id });
    }
};


export const buildReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUILD_ITEM_ACTION_TYPES.cpu:
            if (!state.brands.includes(action.payload)) {
                return {
                    ...state,
                    brands: [...state.brands, action.payload]
                };
            }
            return state;
        case FILTER_BRAND_ACTION_TYPES.remove:
            if (state.brands.includes(action.payload)) {
                return {
                    ...state,
                    brands: state.brands.filter(brand => brand !== action.payload)
                }
            }
            return state;
        case FILTER_PRICE_ACTION_TYPES.change:
            return { ...state, priceRange: action.payload };
        default:
            return state
    }
};
