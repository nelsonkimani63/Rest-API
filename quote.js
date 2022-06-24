const express = require('express');
const server = express();
const PORT = 5000;


server.listen(PORT, function() {
    return console.log(`Server is listening on port: ${PORT}`);
});