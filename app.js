const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Miguel Elias'));

app.get('/', (req, res) => res.send('Deus é bom o tempo todo, o tempo todo Deus é bom'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
