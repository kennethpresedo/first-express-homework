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

app.get('/magic/:question', (req, res) => {
    const magicResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    const randomMagic = magicResponse[Math.floor(Math.random()*magicResponse.length)];
    const ans = req.params.question
    res.send(`<h1>You asked ${ans} and The magic 8 ball says: ${randomMagic}</h1>`);
});


// Port
app.listen(3000, function() {
    console.log('listening on port 3000')
});
