const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World, welcome to nodeJS')
});

app.listen(port, () => {
    console.log(`helloWorld listening on port ${port}!`)
});