var express = require('express'),
    app = express();
app.use(express.static('./cozinhapp'));

module.exports = app;