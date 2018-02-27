const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/7a9383085bff8cc71a62aa0a8517e03a/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                currentTemp: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather')
        }
    });
}


module.exports.getWeather = getWeather;