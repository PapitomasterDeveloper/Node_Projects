const request = require('request');

const url = 'https://api.darksky.net/forecast/1fa1a6fd5a0adce4becbbbdae63f6755/37.8267,-122.4233';

request({url: url, json: true},(error, response) => {
	//const data = JSON.parse(response.body);
	//console.log(data.currently);
	//console.log(response.body.currently);
	if(error){
		console.log('Unable to connect to weather service');
	} else if(response.body.error){
		console.log('Unable to find location');
	} else {
		console.log(' ' + response.body.daily.data[0].summary)
		console.log('\n It is currently ' + response.body.currently.temperature + ' degrees out.\n');
	}
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFwaXRvbWFzdGVyIiwiYSI6ImNqd3FxMmt6dzFkeXM0Y29kMXQ3cG10MzYifQ.AA6MnvhFvThQl2J-6pefKw&limit=1';

request({url: geocodeURL, json: true}, (error, response) => {
	if(error) {
		console.log('Unable to connect to location services!');
	} else if(response.body.features.length === 0) {
		console.log('Unable to find location, try another search.');
	} else {
		const latitude = response.body.features[0].center[1];
        	const longitude = response.body.features[0].center[0];
        	console.log(latitude, longitude);
	}
});

