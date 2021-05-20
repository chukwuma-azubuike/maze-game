//Dependencies
const express = require('express');
const app = express();

// Middleware
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})

app.listen(3000, () => {
    console.log('Maze Game running on port 3000!')
})