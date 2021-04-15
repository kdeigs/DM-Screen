const express = require('express');
const PORT = 3003;
const app = express()

app.get('/', (req, res) => {
    res.send('Deighan\'s Dynamic DM Screen API says Hi!');
});

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});