const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/pull-request', (req, res) => {
    const { title, description, author, repository } = req.body;
    res.status(200).json({ message: 'Пул реквест успішно створено!' });
});

app.listen(3000, () => {
    console.log('Сервер запущено на порті 3000');
});
