const express = require('express');
const path = require('path');

const app = express();

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'func.html'));
});

app.listen(4000);