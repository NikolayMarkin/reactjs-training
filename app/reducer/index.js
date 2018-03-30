import {combineReducers} from 'redux'
import {FILTER, FILTER_DETAILS, START_LOADING, STOP_LOADING, ADD_DATA, ADD_DATA_IN_DETAILS} from '../constants'

const gridState = {
    records: [],
    filtered: [],
    loading: false
};

const detailState = {
    records: [],
    loading: false
};

export function grid(state = gridState, action) {
    switch (action.type) {
        case FILTER:
            const filteredOutIds = state.records
                .filter(record => !record.name.toUpperCase().includes(action.value.toUpperCase()))
                .map(record => record.id);
            return Object.assign({}, state, {filtered: filteredOutIds});
        case START_LOADING:
            return Object.assign({}, state, {loading: true});
        case STOP_LOADING:
            return Object.assign({}, state, {loading: false});
        case ADD_DATA:
            return Object.assign({}, state, {
                records: [...action.value]
            });
        default:
            return state
    }

}

export function details(state = detailState, action) {
    switch (action.type) {
        case FILTER_DETAILS:
            return action.value
                ? Object.assign({}, {records: state.records.filter(record => record.id == action.value)})
                : Object.assign({}, {records: state.records});
        case START_LOADING:
            return Object.assign({}, state, {loading: true});
        case STOP_LOADING:
            return Object.assign({}, state, {loading: false});
        case ADD_DATA_IN_DETAILS:
            return Object.assign({}, {records: action.value});
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    details,
    grid
});