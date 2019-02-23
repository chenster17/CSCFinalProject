import {FILTER_BRAND_ACTION_TYPES, FILTER_PRICE_ACTION_TYPES} from "../helpers/actionTypes";

const initialState = {
    brands: [],
    priceRange: []
};

export const handleCheck = (event) => {
    const isChecked = event.currentTarget.checked;
    const brand = event.currentTarget.name;
    return isChecked ? dispatch => {
        dispatch({ type: FILTER_BRAND_ACTION_TYPES.add, payload: brand });
    } : dispatch => {
        dispatch({ type: FILTER_BRAND_ACTION_TYPES.remove, payload: brand });
    }
};

export const handleSliderChange = (event) => {
    return dispatch => {
        dispatch({ type: FILTER_PRICE_ACTION_TYPES.change, payload: event });
    }
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BRAND_ACTION_TYPES.add:
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
