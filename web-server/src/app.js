const express = require('express');
const path = require('path');

//console.log(__dirname);
//console.log(__filename);
//console.log(path.join(__dirname, '../../public/index.html'))

const app = express();
const publicDirectoryPath = path.join(__dirname, '../../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
	res.render('index');
});

app.get('/weather', (req, res) => {
	res.send({
		forecast: "It's raining",
		location: "Monterrey"
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});

