import {FILTER_BRAND_ACTION_TYPES, FILTER_PRICE_ACTION_TYPES} from "../helpers/actionTypes";

const initialState = {
    brands: [],
    priceRange: []
};

export const handleCheck = (event) => {
    event.preventDefault();
    const text = event.currentTarget[0].value;
    return dispatch => {
        dispatch({ type: SEARCH_ACTION_TYPES.success, payload: text });
    }
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BRAND_ACTION_TYPES.success:
            return { ...state, brand: action.payload };
        case FILTER_PRICE_ACTION_TYPES.success:
            return { ...state, price: action.payload };
        default:
            return state
    }
};