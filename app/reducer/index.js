import {combineReducers} from 'redux'
import {FILTER, FILTER_DETAILS, START_LOADING, STOP_LOADING, ADD_DATA} from '../Constants'

let detailsRecords = [{
    id: 1,
    name: "John Doe",
    about: "Nice guy",
    hobby: "Likes drinking wine",
    skills: ["html", "javascript", "redux"],
    avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
}, {
    id: 2,
    name: "Mary Moe",
    about: "Cute girl",
    hobby: "Likes playing xbox whole days long",
    skills: ["Fortran", "Lua", "R#"],
    avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
}];

const gridState = {
    records: [],
    filtered: [],
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

export function details(state = detailsRecords, action) {
    switch (action.type) {
        case FILTER_DETAILS:
            return action.value
                ? detailsRecords.filter(record => record.id == action.value)
                : detailsRecords;
        default:
            return state
    }

}

export const rootReducer = combineReducers({
    details,
    grid
});