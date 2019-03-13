import {BUILD_ITEM_ACTION_TYPES} from "../helpers/actionTypes";

const initialState = {
    CPU: "",
    Motherboard: "",
    GPU: [],
    PS: "",
    RAM: [],
    Storage: [],
    Case: ""
};

export const handleAdd = (event) => {
    const ptype = event.currentTarget.value.split(",")[1];
    const id = event.currentTarget.value.split(",")[0];
    
    switch (ptype) {
        case "CPU":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.cpu, payload: id })};
        case "Motherboard":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.mobo, payload: id })};
        case "GPU":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.gpu, payload: id })};
        case "Power Supply":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.ps, payload: id })};
        case "RAM":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.ram, payload: id })};
        case "Storage":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.storage, payload: id })};
        case "Case":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES['case'], payload: id })};
    }   
};

export const handleRemove = (event) => {
    const ptype = event.currentTarget.value.split(",")[1];
    const id = event.currentTarget.value.split(",")[0];
    
    switch (ptype) {
        case "CPU":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removecpu, payload: id })};
        case "Motherboard":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removemobo, payload: id })};
        case "GPU":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removegpu, payload: id })};
        case "Power Supply":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removeps, payload: id })};
        case "RAM":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removeram, payload: id })};
        case "Storage":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES.removestorage, payload: id })};
        case "Case":
            return dispatch => { dispatch({ type: BUILD_ITEM_ACTION_TYPES['removecase'], payload: id })};
    }   
};


export const buildReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUILD_ITEM_ACTION_TYPES.cpu:
            return {...state, CPU: action.payload};
        case BUILD_ITEM_ACTION_TYPES.mobo:
            return {...state, Motherboard: action.payload};
        case BUILD_ITEM_ACTION_TYPES.gpu:
            return {...state, GPU: [...state.GPU, action.payload]};
        case BUILD_ITEM_ACTION_TYPES.ps:
            return {...state, PS: action.payload};
        case BUILD_ITEM_ACTION_TYPES.ram:
            return {...state, RAM: [...state.RAM, action.payload]};
        case BUILD_ITEM_ACTION_TYPES.storage:
            return {...state, Storage: [...state.Storage, action.payload]};
        case BUILD_ITEM_ACTION_TYPES['case']:
            return {...state, Case: action.payload};
        case BUILD_ITEM_ACTION_TYPES.removecpu:
            return {...state, CPU: ""}
        case BUILD_ITEM_ACTION_TYPES.removemobo:
            return {...state, Motherboard: ""}
        case BUILD_ITEM_ACTION_TYPES.removegpu:
            if (state.GPU.includes(action.payload)) {
                var newState = [...state.GPU];
                newState.splice(newState.indexOf(action.payload), 1);
                return {...state, GPU: newState};
            }
            return state;
        case BUILD_ITEM_ACTION_TYPES.removeps:
            return {...state, PS: ""}
        case BUILD_ITEM_ACTION_TYPES.removeram:
            if (state.RAM.includes(action.payload)) {
                var newState = [...state.RAM];
                newState.splice(newState.indexOf(action.payload), 1);
                return {...state, RAM: newState};
            }
            return state;
        case BUILD_ITEM_ACTION_TYPES.removestorage:
            if (state.Storage.includes(action.payload)) {
                var newState = [...state.Storage];
                newState.splice(newState.indexOf(action.payload), 1);
                return {...state, Storage: newState};
            }
            return state;
        case BUILD_ITEM_ACTION_TYPES['removecase']:
            return {...state, Case: ""}
        default:
            return state
    }
};
