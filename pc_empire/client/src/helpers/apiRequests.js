import axios from "axios";

import {
    CAPTCHA_ACTION_TYPES,
    FETCH_BRANDS_ACTION_TYPES,
    FETCH_CPU_ACTION_TYPES,
    FETCH_MOBO_ACTION_TYPES,
    FETCH_PRICES_ACTION_TYPES,
    FETCH_GPU_ACTION_TYPES,
    FETCH_PS_ACTION_TYPES,
    FETCH_RAM_ACTION_TYPES,
    FETCH_STORAGE_ACTION_TYPES,
    FETCH_CASE_ACTION_TYPES,
    REGISTRATION_ACTION_TYPES,
    SIGN_IN_ACTION_TYPES
} from "./actionTypes";

const server_url = "http://localhost:5000/";

export const fetchAllCpus = () => {
    return dispatch => {
        dispatch({ type: FETCH_CPU_ACTION_TYPES.pending });
        return axios.get(server_url + "cpu/getAll")
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
        return axios.get(server_url + "motherboard/getAll")
            .then(response => {
                dispatch({type: FETCH_MOBO_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_MOBO_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllGPUs = () => {
    return dispatch => {
        dispatch({ type: FETCH_GPU_ACTION_TYPES.pending });
        return axios.get(server_url + "gpu/getAll")
            .then(response => {
                dispatch({type: FETCH_GPU_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_GPU_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllPSs = () => {
    return dispatch => {
        dispatch({ type: FETCH_PS_ACTION_TYPES.pending });
        return axios.get(server_url + "power_supply/getAll")
            .then(response => {
                dispatch({type: FETCH_PS_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_PS_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllRAMs = () => {
    return dispatch => {
        dispatch({ type: FETCH_RAM_ACTION_TYPES.pending });
        return axios.get(server_url + "ram/getAll")
            .then(response => {
                dispatch({type: FETCH_RAM_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_RAM_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllStorages = () => {
    return dispatch => {
        dispatch({ type: FETCH_STORAGE_ACTION_TYPES.pending });
        return axios.get(server_url + "storage/getAll")
            .then(response => {
                dispatch({type: FETCH_STORAGE_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_STORAGE_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchAllCases = () => {
    return dispatch => {
        dispatch({ type: FETCH_CASE_ACTION_TYPES.pending });
        return axios.get(server_url + "case/getAll")
            .then(response => {
                dispatch({type: FETCH_CASE_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_CASE_ACTION_TYPES.failure, payload: error});
            })
    }
};
export const fetchBrands = (productType) => {
    if (productType === "Power Supply"){
        var ptype = "power_supply";
    } else {
        ptype = productType;
    }
    return dispatch => {
        dispatch({ type: FETCH_BRANDS_ACTION_TYPES.pending });
        return axios.get(server_url + `${ptype}/getBrands`)
            .then(response => {
                dispatch({type: FETCH_BRANDS_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_BRANDS_ACTION_TYPES.failure, payload: error});
            })
    }
};

export const fetchPrices = (productType) => {
    if (productType === "Power Supply"){
        var ptype = "power_supply";
    } else {
        ptype = productType;
    }
    return dispatch => {
        dispatch({ type: FETCH_PRICES_ACTION_TYPES.pending });
        return axios.get(server_url + `${ptype}/getPrices`)
            .then(response => {
                dispatch({type: FETCH_PRICES_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: FETCH_PRICES_ACTION_TYPES.failure, payload: error});
            })
    }
};

export const fetchUsernameValid = (username, type) => {
    return dispatch => {
        dispatch({ type: REGISTRATION_ACTION_TYPES.validUsername.pending });
        if (username === "") {
            return dispatch({ type: REGISTRATION_ACTION_TYPES.validUsername.success, payload: false });
        }
        return axios.get(server_url + `account/getByUsername/${username}`)
            .then(response => type === "s" ?
                dispatch({type: REGISTRATION_ACTION_TYPES.validUsername.success, payload: response.data.length > 0}) :
                dispatch({type: REGISTRATION_ACTION_TYPES.validUsername.success, payload: response.data.length < 1})
            )
            .catch(error => {
                dispatch({type: REGISTRATION_ACTION_TYPES.validUsername.failure, payload: error});
            })

    }
};

export const registerAccount = (name, username, password) => {
    return dispatch => {
        dispatch({ type: REGISTRATION_ACTION_TYPES.registerAccount.pending });
        return axios.post(server_url + `account/makeAccount`, {Name: name, Username: username, Password: password})
            .then(response => {
                dispatch({type: REGISTRATION_ACTION_TYPES.registerAccount.success, payload: true});
            })
            .catch(error => {
                dispatch({type: REGISTRATION_ACTION_TYPES.registerAccount.failure, payload: false});
            })
    }
};

export const signInAccount = (username, password) => {
    return dispatch => {
        dispatch({ type: SIGN_IN_ACTION_TYPES.pending });
        return axios.get(server_url + `account/getByUsername/${username}`)
            .then(response => {
                if (password === response.data[0].Password) {
                    dispatch({type: SIGN_IN_ACTION_TYPES.success, payload: response.data[0]});
                }
                else {
                    dispatch({type: SIGN_IN_ACTION_TYPES.failure, payload: false});
                }
            })
            .catch(error => {
                dispatch({type: SIGN_IN_ACTION_TYPES.failure, payload: false});
            })
    }
};
