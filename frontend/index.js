'use strict';

const PORT = process.env.PORT || 4000;
const app = require('./config/server')();

app.listen(PORT, (err) => console.log(`Frontend is running on port: ${PORT}`));