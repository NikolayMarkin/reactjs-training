var express = require('express');
var app = express();

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var detailsRecords = [{
    id: 1,
    name: "John Doe",
    about: "Nice guy",
    hobby: "Likes drinking wine",
    skills: ["html", "javascript", "redux"],
    avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-3.jpg"
}, {
    id: 2,
    name: "Mary Moe",
    about: "Cute girl",
    hobby: "Likes playing xbox whole days long",
    skills: ["Fortran", "Lua", "R#"],
    avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
}, {
    id: 3,
    name: "Peter",
    about: "Awesome Developer",
    hobby: "He is the author of React.js",
    skills: ["Lisp", "Om", "JS"],
    avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
}];

var id = 3;

function generateData() {
    id += 1;
    detailsRecords.push({
        id: id,
        name: "GeneratedRandomly",
        about: "Generated About",
        hobby: "Generated Hobby",
        skills: ["G", "E", "N", "E", "R", "A", "T", "E", "D", id],
        avatar: "http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-4.jpg"
    });
}

app.get('/', function (req, res) {
    generateData();
    res.json({
        detailsRecords: detailsRecords
    });
});

app.listen(process.env.PORT || 4730);