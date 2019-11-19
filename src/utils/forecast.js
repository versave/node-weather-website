const request = require('request');

const forecast = (lat, lng, callback) => {
    const url = `https://api.darksky.net/forecast/e92434e2899605c17d9bf7e9bd05e171/${encodeURIComponent(lat)},${encodeURIComponent(lng)}?units=si`;

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;