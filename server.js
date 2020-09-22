const express = require('express');
const cors = require('cors');
const { response } = require('express');
const server = express();
const port = 8080;

const profiles = [
        
    {
        id: 1,
        name: 'Sarina Amin',
        bio: 'Bio',
        location: 'London',
        role: 'engineer'
    },
    {
        id: 2,
        name: 'Jack2',
        bio: 'Bio',
        location: 'London',
        role: 'engineer'
    },
    {
        id: 3,
        name: 'Jack3',
        bio: 'Bio',
        location: 'London',
        role: 'engineer'
    }
];

server.use(cors())
server.get('/api/profiles', (req, res) => {
    res.send(JSON.stringify(profiles));
});

server.listen(port);
console.log(`Sever started, listening on port ${port}`);