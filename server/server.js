//Dependencies
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const PORT = 3003;
const app = express()

//APIS LIST
const dndAPIBase = 'https://www.dnd5eapi.co/api/';

//Middleware
const whitelist = ['http://localhost:3000'];
const corsOptions = { 
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1){
            callback(null, true);
        } else {
            callback(new Error('Not allowed by cors'))
        }
    }
}
app.use(cors(corsOptions));


app.get('/', async (req, res) => {
    const response = await axios({
        url: dndAPIBase + '/rules',
        method: 'get'
    });
    console.log(response);
    res.json(response.data);
});

app.get('/populateRules', async (req, res) => {
    const rules = await axios({
        url: dndAPIBase + '/rule-sections'
    })
    res.json({data: rules.data});
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});