import axios from 'axios';
import { CPU_ACTION_TYPES } from "./actionTypes";

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