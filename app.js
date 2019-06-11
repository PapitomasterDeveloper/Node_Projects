const request = require('request');
const geocode = require('./utils/geocode');

/*
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
*/

geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})
