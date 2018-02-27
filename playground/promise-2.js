const request = require('request');

var geoCodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address)
    return new Promise((resolve, reject) => {
        request({
            url: ` https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAfKq-PL2nJfOK4slHyB_FjNAeh_Tn9ABQ`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });


};

geoCodeAddress(92081).then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage)
})


