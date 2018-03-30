import * as types from '../constants'

export function filterDetails(value) {
    return {
        type: types.FILTER_DETAILS,
        value
    }
}

export function filterGrid(value) {
    return {
        type: types.FILTER,
        value
    }
}

export function startLoading() {
    return {
        type: types.START_LOADING
    }
}

export function stopLoading() {
    return {
        type: types.STOP_LOADING
    }
}

export function addData(value) {
    return {
        type: types.ADD_DATA,
        value
    }
}

export function loadDataInGrid(){
    return (dispatch)=>{
        dispatch(startLoading());
        fetch('http://localhost:4730')
            .then(response => response.json())
            .then(json => dispatch(addData(json.detailsRecords)))
            .then(() => dispatch(stopLoading()))
    }
}

export function addDataInDetails(detailsRecords){
    return {
        type: types.ADD_DATA_IN_DETAILS,
        value: detailsRecords
    }
}

export function loadDataAndFilterDetails(id){
    return (dispatch)=>{
        dispatch(startLoading());
        fetch('http://localhost:4730')
            .then(response => response.json())
            .then(json => dispatch(addDataInDetails(json.detailsRecords)))
            .then(() => dispatch(filterDetails(id)))
            .then(() => dispatch(stopLoading()))
    }
}

