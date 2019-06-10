const request = require('request');

const url = 'https://api.darksky.net/forecast/1fa1a6fd5a0adce4becbbbdae63f6755/37.8267,-122.4233';

request({url: url},(error, response) => {
	const data = JSON.parse(response.body);
	console.log(data.currently);
})
