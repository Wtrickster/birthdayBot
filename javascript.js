//get current date
var curday = function(sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (yyyy + sp + mm + sp + dd);
};
//for debug
console.log(curday('-'));
var cake = localStorage["userName"] || "";
//
function page() {
    if (cake.length > 1) {
        render1();
        render2();
        //for debug
    } else {
        request();
    };
    //for debug
    console.log("ready!");
    console.log(cake);
}

//reset local storage
function reset() {
    localStorage.setItem("userName", " ")
        //reload page
    location.reload();
    //for debug
    console.log("reset");
};

//save userName to localStorage
function submit() {
    var person = document.getElementById("person").value
        //local storage
    localStorage.setItem("userName", person);
    //for debug
    console.log("submitted")
    console.log(localStorage["userName"]);
    //reload page
    location.reload();
};

//start on load
$(document).ready(page());

//request for name
function request() {
    //creates a div and adding a class to make it a row
    var row = $("<div>").addClass("row");
    //adding text requesting name
    row.text("Hello there! I am Birthday Bot! What is your name?");
    //placing row in its place
    $(".greet").append(row);

    //creates input
    var input = $("<input>");
    //grants attr and classes
    input.attr("type", "text").attr("placeholder", "Please Enter Name Here").attr("id", "person").addClass("validate input-field col s12 l4 offset-l2");
    //places input
    row.append(input);

    //creates button
    var button = $("<button>");
    //grants attr and classes
    button.attr("name", "action").attr("type", "submit").text("Submit").addClass("btn waves-effect waves-light col s4 l2 offset-l2").attr("onclick", "submit()");
    //places input
    row.append(button);
};

//zodiac API
function render1() {
    //get response
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://zodiac-sign.p.rapidapi.com/sign?date=" + curday('-'),
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9442c81ff9mshcbf41d239b99d99p1b56d4jsnb22379c2588e",
            "x-rapidapi-host": "zodiac-sign.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
    }).then(function(response) {
        //creates a div
        var greet = $("<div>");
        //input response data
        greet.text("Hello there " + localStorage["userName"] + "! Here is my list of which " + response + "'s birthday is today?");
        //placing row in its place
        $(".greet").append(greet);
        //for debug
        console.log("render1")
    });

};

//celleb API
function render2() {
    //get response
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://celebrity-bucks.p.rapidapi.com/birthdays/JSON",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9442c81ff9mshcbf41d239b99d99p1b56d4jsnb22379c2588e",
            "x-rapidapi-host": "celebrity-bucks.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function(response) {
        //for debug  
        console.log(response.Birthdays);
    }).then(function(response) {
        //repeat for each response
        for (var i = 0; i < response.Birthdays.length; i++) {
            //creates a div and adding a class to make it a row
            var row = $("<div>").addClass("row celeb-" + i);
            //placing row in its place
            $(".stuffin").append(row);

            //creates a div and adding a class to make it a column
            var img = $("<img>").addClass("col s12 m6 l6");

            //adding a img url
            img.attr("src", "https://celebritybucks.com/images/celebs/full/" + response.Birthdays[i].celebId + ".jpg");
            //placing img in its place
            console.log(response.Birthdays[i].celebId);
            row.append(img);
            //adding a class to make it a column and input response data
            var info = $("<div>").addClass("info col s12 m6 l6").text(response.Birthdays[i].name + " just turned " + response.Birthdays[i].age + " years old!");
            //placing info in its place
            row.append(info);

            //for debug
            console.log(i);
        };

    });
};