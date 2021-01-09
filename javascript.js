import populationIO from 'api-population-io';

const populationIO = require('api-population-io');

populationIO.wpRank.onDate(data, [callback])

$(document).ready(function() {
    $('select').formSelect();
});

// import populationIO from 'api-population-io';
// const populationIO = require('api-population-io');

// populationIO.lifeExpectancy.total({
//         sex: 'male',
//         country: 'United Kingdom',
//         dob: '1970-01-01'
//     })
//     .then((data) => {
//         console.log('total_life_expectancy:', data.total_life_expectancy);
//     })
//     .catch((err) => {
//         console.log(err.detail);
//     });
// response = unirest.get("https://daxeel-celebinfo-v1.p.mashape.com/date/28/september",
//     headers = {
//         "X-Mashape-Key": "V96M0xptxxxxxx",
//         "Accept": "text/plain"
//     }
// )
var queryURL =
    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
for (var i = 0; i < results.length; i++) {
    // Creating a div for the gif
    var newDiv = $("<div>");

    // Storing the results
    var fullName = results[i].name;
    var dob = results[i].dob;
    var age = results[i].age;
    var pic = celebId

    // Creating a paragraph tag with the result item's rating
    var p = $("<p>").text(fulName);
    var p = $("<p>").text("Birthday: " + dob);
    var p = $("<p>").text("age: " + age);
    // Creating an image tag
    var personImage = $("<img>");

    // Giving the image tag an src attribute of a proprty pulled off the
    // result item
    personImage.attr("src", results[i].images.fixed_height.url);

    // Appending the paragraph and personImage we created to the "gifDiv" div we created
    newDiv.append(p);
    newDiv.append(personImage);
};