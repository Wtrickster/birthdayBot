import populationIO from 'api-population-io';
const populationIO = require('api-population-io');

populationIO.lifeExpectancy.total({
        sex: 'male',
        country: 'United Kingdom',
        dob: '1970-01-01'
    })
    .then((data) => {
        console.log('total_life_expectancy:', data.total_life_expectancy);
    })
    .catch((err) => {
        console.log(err.detail);
    });
response = unirest.get("https://daxeel-celebinfo-v1.p.mashape.com/date/28/september",
    headers = {
        "X-Mashape-Key": "V96M0xptxxxxxx",
        "Accept": "text/plain"
    }
)