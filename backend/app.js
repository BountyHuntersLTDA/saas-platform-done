'use strict';

const app = require('./config/server')();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Backend Server Running on Port ${port}`);
});