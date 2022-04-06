import express from 'express';
const app = express();


app.get('/hello', (req, res) => {
    res.send("Hello world, this is beautiful");
});

app.get('/', (req, res) => {
    res.send("Welcome to full stack development.");
});


app.listen(4000);