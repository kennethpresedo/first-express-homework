// Modules
const express = require('express');

// Express App
const app = express();

//Routes
app.get('/', (req, res) => {
    res.send('him');
});

app.get('/greeting/:name', (req, res) => {
    const user = req.params.name
    res.send(`<h1>what up, im ${user}</h1>`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const ans = parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100)
    res.send(`<h1>please pay $${ans}</h1>`);
});

// Port
app.listen(3000, function() {
    console.log('listening on port 3000')
});
