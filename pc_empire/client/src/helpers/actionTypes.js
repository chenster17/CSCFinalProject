const FETCH_CPU_ACTION = "FETCH_CPU_ACTION";
const FETCH_CPU_ACTION_SUCCESS = "FETCH_CPU_ACTION_SUCCESS";
const FETCH_CPU_ACTION_FAILURE = "FETCH_CPU_ACTION_FAILURE";
export const FETCH_CPU_ACTION_TYPES = {
    pending: FETCH_CPU_ACTION,
    success: FETCH_CPU_ACTION_SUCCESS,
    failure: FETCH_CPU_ACTION_FAILURE
};

const FETCH_BRANDS_ACTION = "FETCH_BRANDS_ACTION";
const FETCH_BRANDS_ACTION_SUCCESS = "FETCH_BRANDS_ACTION_SUCCESS";
const FETCH_BRANDS_ACTION_FAILURE = "FETCH_BRANDS_ACTION_FAILURE";
export const FETCH_BRANDS_ACTION_TYPES = {
    pending: FETCH_BRANDS_ACTION,
    success: FETCH_BRANDS_ACTION_SUCCESS,
    failure: FETCH_BRANDS_ACTION_FAILURE
};

const FETCH_PRICES_ACTION = "FETCH_PRICES_ACTION";
const FETCH_PRICES_ACTION_SUCCESS = "FETCH_PRICES_ACTION_SUCCESS";
const FETCH_PRICES_ACTION_FAILURE = "FETCH_PRICES_ACTION_FAILURE";
export const FETCH_PRICES_ACTION_TYPES = {
    pending: FETCH_PRICES_ACTION,
    success: FETCH_PRICES_ACTION_SUCCESS,
    failure: FETCH_PRICES_ACTION_FAILURE
};

const FILTER_BRAND_ACTION_ADD = "FILTER_BRAND_ACTION_ADD";
const FILTER_BRAND_ACTION_REMOVE = "FILTER_BRAND_ACTION_REMOVE";
export const FILTER_BRAND_ACTION_TYPES = {
    add: FILTER_BRAND_ACTION_ADD,
    remove: FILTER_BRAND_ACTION_REMOVE,
};

const FILTER_PRICE_ACTION_CHANGE = "FILTER_PRICE_ACTION_CHANGE";
export const FILTER_PRICE_ACTION_TYPES = {
    change: FILTER_PRICE_ACTION_CHANGE
};


const SEARCH_ACTION_SUCCESS = "SEARCH_ACTION_CHANGE";
export const SEARCH_ACTION_TYPES = {
    change: SEARCH_ACTION_SUCCESS
};
