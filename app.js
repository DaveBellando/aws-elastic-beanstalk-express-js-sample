const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World from Dave Bellando from Visual Studio! This demonstrates the Review before deployment. V2'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
