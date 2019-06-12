const https = require('https');
const url = 'https://api.darksky.net/forecast/1fa1a6fd5a0adce4becbbbdae63f6755/40,-75';

const request = https.request(url, (response) => {

	let data = '';

	response.on('data', (chunk) => {
		data = data + chunk.toString();
	});

	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});

});

request.on('error', (error) => {
	console.log('An error', error);
});

request.end();
