import { SEARCH_ACTION_TYPES } from "../helpers/actionTypes";

export const handleSearch = (event) => {
    event.preventDefault();
    const text = event.currentTarget[0].value;
    return dispatch => {
        dispatch({ type: SEARCH_ACTION_TYPES.success, payload: text });
    }
};

/*
export const fetchAllCpus = () => {
    return dispatch => {
        dispatch({ type: CPU_ACTION_TYPES.pending });
        return axios.get(server_url + "api/getAllCPUs")
            .then(response => {
                dispatch({type: CPU_ACTION_TYPES.success, payload: response});
            })
            .catch(error => {
                dispatch({type: CPU_ACTION_TYPES.failure, payload: error});
            })
    }
};
 */

export const searchReducer = (state = "", action) => {
    switch (action.type) {
        case SEARCH_ACTION_TYPES.success:
            return action.payload;
        default:
            return state
    }
};
