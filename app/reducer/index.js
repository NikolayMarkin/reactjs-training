import {combineReducers} from 'redux'

let detailsRecords = [{
    id:1,
    name:"John Doe",
    about:"Nice guy",
    hobby:"Likes drinking wine",
    skills:["html", "javascript", "redux"],
    avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
},{
    id:2,
    name:"Mary Moe",
    about:"Cute girl",
    hobby:"Likes playing xbox whole days long",
    skills:["Fortran", "Lua", "R#"],
    avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
}];


export function grid(state = detailsRecords, action) {
    switch (action.type) {
        case "FILTER":
            return detailsRecords.filter(record => record.name.toUpperCase().includes(action.value.toUpperCase()));
        default:
            return state
    }

}

export function details(state = detailsRecords, action) {
    switch (action.type) {
        case "FILTER":
//I also do something on filter action
            return state;
        default:
            return state
    }

}

export const rootReducer = combineReducers({
    details,
    grid
});