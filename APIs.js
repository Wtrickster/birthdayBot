//Zodiac API
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://zodiac-sign.p.rapidapi.com/signs",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "9442c81ff9mshcbf41d239b99d99p1b56d4jsnb22379c2588e",
        "x-rapidapi-host": "zodiac-sign.p.rapidapi.com",
        "date": day + month,
    }
};

$.ajax(settings).done(function(response) {
    console.log(response);
    // Creating a div for the gif
    var newDiv = $("<div>");

    // Storing the results
    var x = document.getElementById("zAPI")

    x.innerHTML = results[i].name;
    newDiv.prepend(x);
});

//Celeb API
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://celebrity-bucks.p.rapidapi.com/birthdays/JSON",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "9442c81ff9mshcbf41d239b99d99p1b56d4jsnb22379c2588e",
        "x-rapidapi-host": "celebrity-bucks.p.rapidapi.com",
        "date": day + month,
    }
};

$.ajax(settings).done(function(response) {
    console.log(response);

    //repeat for each in the array
    for (var i = 0; i < results.length; i++) {
        // Creating a div for the gif
        var newDiv = $("<div>");

        // Storing the results
        var fullName = results[i].name;
        var dob = results[i].dob;
        var age = results[i].age;
        var pic = results[i].celebId;

        // Creating a paragraph tag with the result item's rating
        var p1 = $("<p>").text(fullName);
        var p2 = $("<p>").text("Birthday: " + dob);
        var p3 = $("<p>").text("age: " + age);

        // Creating an image tag
        var personImage = $("<img>");

        // Giving the image tag an src attribute of a proprty pulled off the result item
        personImage.attr("href=https://celebritybucks.com/images/celebs/thumb/" + pic + ".jpg");

        // Appending the paragraph and personImage we created to the "newDiv" div we created
        newDiv.append(p1);
        newDiv.append(p2);
        newDiv.append(p3);
        newDiv.append(personImage);
    };
});