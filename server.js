'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World! This is the main Express backend server.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
