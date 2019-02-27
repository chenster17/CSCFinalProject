import axios from 'axios';

import {
    FETCH_BRANDS_ACTION_TYPES,
    FETCH_CPU_ACTION_TYPES,
    FETCH_MOBO_ACTION_TYPES,
    FETCH_PRICES_ACTION_TYPES
} from "./actionTypes";
const server_url = "http://localhost:5000/";
/*export const fetchAllCpus = (current) => {
    axios.get(server_url + "api/getAllCPUs")
        .then(response => {
            current.setState({ cpus: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
};*/

export const fetchAllCpus = () => {
    return dispatch => {
        dispatch({ type: FETCH_CPU_ACTION_TYPES.pending });
        return axios.get(server_url + "api/getAllCPUs")
            .then(response => {
                dispatch({type: FETCH_CPU_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_CPU_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllMobos = () => {
    return dispatch => {
        dispatch({ type: FETCH_MOBO_ACTION_TYPES.pending });
        return axios.get(server_url + "api/getAllMobos")
            .then(response => {
                dispatch({type: FETCH_MOBO_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_MOBO_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchBrands = (productType) => {
    return dispatch => {
        dispatch({ type: FETCH_BRANDS_ACTION_TYPES.pending });
        return axios.get(server_url + `api/get${productType}Brands`)
            .then(response => {
                dispatch({type: FETCH_BRANDS_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_BRANDS_ACTION_TYPES.failure, payload: error});
            })
    }
};

export const fetchPrices = (productType) => {
    return dispatch => {
        dispatch({ type: FETCH_PRICES_ACTION_TYPES.pending });
        return axios.get(server_url + `api/get${productType}Prices`)
            .then(response => {
                dispatch({type: FETCH_PRICES_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_PRICES_ACTION_TYPES.failure, payload: error});
            })
    }
};