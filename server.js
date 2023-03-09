const express = require('express');

const app = express();

function delay(duration) {
	const startTime = Date.now();
	while (Date.now() - startTime < duration) {
		// event loop is blocked
	}
}

app.get('/', (req, res) => {
	return res.send(`Perfor mance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
	delay(4000);
	return res.send(`Beep beep beep! ${process.pid}`);
});

console.log('Worker process started.');
app.listen(3000);
