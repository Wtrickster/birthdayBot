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
console.log(curday('-'));

//start on load
$(document).ready(function() {
    render1();
    render2();
    //for debug
    console.log("ready!");
});

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
        greet.text("Which " + response + "'s birthday is today?");
        //placing row in its place
        $(".greet").append(greet);

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
            var row = $("<div>").addClass(function(index) {
                return "row test celeb-" + index++
            });;

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