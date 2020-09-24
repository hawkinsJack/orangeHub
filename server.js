const express = require('express');
const cors = require('cors');
const { response } = require('express');
const server = express();
const port = 8080;

const profiles = [
        
    {
        id: 1,
        name: 'Samuel Syed',
        bio: 'MSc in Physics and a tech enthusiast with an insatiable curiosity and desire for self-development.',
        location: 'London',
        role: 'DevOps',
        year: '2020'
    },
    {
        id: 2,
        name: 'Mohammad Dasseh',
        bio: 'Ex-Mechanical Engineer. When Im not at work I enjoy mountain climbing, running and reading',
        location: 'Oxford',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 3,
        name: 'Chris Palmer',
        bio: 'MSc in Physics, into chess and amateur astronomy.',
        location: 'Amsterdam',
        role: 'DevOps',
        year: '2020'
    },
    {
        id: 4,
        name: 'Lawrence Logan',
        bio: `Biotech grad that's into sailing, travelling and going to the pub. I will look after your pet, and make you a cuppa.`,
        location: 'Oxford',
        role: 'DevOps',
        year: '2020'
    },
    {
        id: 5,
        name: 'Luke Marmion',
        bio: 'TIO Core Engineering, pesto enthusiast, Chem Eng grad',
        location: 'London',
        role: 'DevOps',
        year: '2020'
    },
    {
        id: 6,
        name: 'Celine Clausen',
        bio: 'Recently graduated as a MSc of Economics, interested in Machine Learning, excellent at cooking take away for dinner, dressage rider and like to go for a short run.',
        location: 'Aalborg',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 7,
        name: 'Sophie Clark',
        bio: 'MSc Computer Science graduate currently learning how to cook',
        location: 'Oxford',
        role: 'DevOps',
        year: '2020'
    },
    {
        id: 8,
        name: 'Venetia Miller',
        bio: 'Newcastle University cheerleading pres 2018, likes to draw animals ( especially cute dogs), is passionate about ethics and oncology!!',
        location: 'Oxford',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 9,
        name: 'Muntazir Qasim',
        bio: 'Runner-Up finish in my Year 4 class spelling competition',
        location: 'Oxford',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 10,
        name: 'Chris Kavanagh',
        bio: 'MSc Aircraft Engineering',
        location: 'Aalborg',
        role: 'DevOps',
        year: '2020'
    },
    {
        id: 11,
        name: 'Dafydd James',
        bio: 'Kahoot enthusiast',
        location: 'Oxford',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 12,
        name: 'Sayma Ahmed',
        bio: 'Just a friendly face :)',
        location: 'Oxford',
        role: 'Network Engineer',
        year: '2020'
    },
    {
        id: 13,
        name: 'Thea Gordon-Wingfield',
        bio: '',
        location: 'London',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 14,
        name: 'Rebecca Pavcic',
        bio: '',
        location: 'London',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 15,
        name: 'Andreas Tryfonos',
        bio: 'Recent graduate, Love travelling, reading, mixing music and sports',
        location: 'London',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 16,
        name: 'Borsi Csokas',
        bio: 'Crazy cat lady in the making ;)',
        location: 'Aalborg',
        role: 'DevOps',
        year: '2020'
    },
    {
        id: 17,
        name: 'Liam Kemmitt',
        bio: 'Part time influencer',
        location: 'Aalborg',
        role: 'DevOps',
        year: '2020'
    },
    {
        id: 18,
        name: 'Sneha Manikandan',
        bio: 'Nature Lover, Traveller',
        location: 'London',
        role: 'Quality Engineer',
        year: '2020'
    },
    {
        id: 19,
        name: 'Charlie Martin',
        bio: '',
        location: 'Oxford',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 20,
        name: 'Omar Shah',
        bio: 'Recent Graduate and food enthusiast. Critical of the tech industry, but optimistic that we can use AI for good.',
        location: 'Amsterdam',
        role: 'DevOps',
        year: '2020'
    },
    {
        id: 21,
        name: 'Sabia Egan',
        bio: 'Biomedical Science graduate. Enjoy cycling and wine.',
        location: 'Oxford',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 22,
        name: 'Angharad Beazley',
        bio: 'Recent graduate into walking, travelling and anything dog related.',
        location: 'London',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 23,
        name: 'Avni Bhatt',
        bio: '',
        location: 'London',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 24,
        name: 'Talha Zubair',
        bio: 'Physics grad with a love for cats, plants and computers.',
        location: 'London',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 25,
        name: 'Richard Snoad',
        bio: '',
        location: 'London',
        role: 'Software Engineer',
        year: '2020'
    },
    {
        id: 26,
        name: 'Hunor-Chris Bocz',
        bio: 'People-person with a passion for robotics. Always up for travelling.',
        location: 'Oxford',
        role: 'DevOps',
        year: '2020'
    },

    {
        id: 27,
        name: 'test',
        bio: 'People-person with a passion for robotics. Always up for travelling.',
        location: 'Oxford',
        role: 'DevOps',
        year: '2019'
    }
];

server.use(cors())
server.get('/api/profiles', (req, res) => {

    const alphaSort = profiles.sort(function(a,b) {
        if (a.name > b.name){
            return -1

        }

        if (b.name > a.name){
            return 1
            
        }
        return 0
    })

    res.send(JSON.stringify(alphaSort.reverse()));
});

server.listen(port);
console.log(`Sever started, listening on port ${port}`);


// const rawData = [{"Name":"Samuel Syed","Joining date":"09/07/2020","Location":"London","Role":"DevOps","Bio":"MSc in Physics and a tech enthusiast with an insatiable curiosity and desire for self-development."},
// {"Name":"Mohammad Dasseh","Joining date":"07.09.2020","Location":"Oxford","Role":"Software Engineer","Bio":"Ex-Mechanical Engineer. When Im not at work I enjoy mountain climbing, running and reading."}
// ,
// {"Name":"Chris Palmer","Joining date":"07.09.20","Location":"Amsterdam","Role":"DevOps","Bio":"MSc in Physics, into chess and amateur astronomy."},
// {"Name":"Lawrence Logan","Joining date":"07.09.20","Location":"Oxford","Role":"DevOps","Bio":"Biotech grad that�s into sailing, travelling and going to the pub. I will look after your pet, and make you a cuppa."}
// ,
// {"Name":"Luke Marmion","Joining date":"07.09.20","Location":"London","Role":"DevOps","Bio":"TIO Core Engineering, pesto enthusiast, Chem Eng grad"},
// {"Name":"Celine Clausen","Joining date":"07.09.20","Location":"Aalborg","Role":"Software Engineer","Bio":"Recently graduated as a MSc of Economics, interested in Machine Learning, excellent at cooking take away for dinner, dressage rider and like to go for a short run."}
// ,
// {"Name":"Sophie Clark","Joining date":"07.09.20","Location":"Oxford","Role":"DevOps Engineer","Bio":"MSc Computer Science graduate currently learning how to cook."},
// {"Name":"Venetia Miller","Joining date":"07.09.20","Location":"Oxford","Role":"Software Engineer","Bio":"Newcastle university cheerleading pres 2018 , likes to draw animals ( especially cute dogs), is passionate about ethics and oncology !!"},
// {"Name":"Muntazir Qasim","Joining date":"07.09.20","Location":"Oxford","Role":"Software Engineer","Bio":"Runner-Up finish in my Year 4 class spelling competition"},
// {"Name":"Chris Kavanagh","Joining date":"07.09.20","Location":"Aalborg","Role":"DevOps","Bio":"MSc Aircraft Engineering"},
// {"Name":"Dafydd James","Joining date":"07.09.20","Location":"Oxford","Role":"Software Engineer","Bio":"Kahoot enthusiast"},
// {"Name":"Sayma Ahmed","Joining date":"07.09.20","Location":"Oxford","Role":"Network Engineer","Bio":"Just a friendly face :)"},
// {"Name":"Thea Gordon-Wingfield","Joining date":"07.09.20","Location":"London (1AS)","Role":"Software Engineer","Bio":""},
// {"Name":"Rebecca Pavcic","Joining date":"07.09.20202","Location":"London (1AS)","Role":"Software Engineer","Bio":""},
// {"Name":"Andreas Tryfonos","Joining date":"07.09.2020","Location":"London","Role":"Software Engineer","Bio":"Recent graduate, Love travelling, reading, mixing music and sports"},
// {"Name":"Borsi Csokas","Joining date":"07.09.20","Location":"Aalborg","Role":"DevOps System Engineer","Bio":"Crazy cat lady in the making ;)"},
// {"Name":"Liam Kemmitt","Joining date":"07.09.20","Location":"London","Role":"DevOps Engineer","Bio":"Part time influencer"},
// {"Name":"Sneha Manikandan","Joining date":"07.09.20","Location":"London","Role":"Quality Engineer","Bio":"Nature Lover, Traveller"},
// {"Name":"Charlie Martin","Joining date":"07.09.20","Location":"Oxford","Role":"Software Engineer","Bio":""},
// {"Name":"Omar Shah","Joining date":"07.09.20","Location":"Amsterdam","Role":"DevOps Engineer","Bio":"Recent Graduate and food enthusiast. Critical of the tech industry, but optimistic that we can use AI for good."},
// {"Name":"Sabia Egan","Joining date":"07.09.20","Location":"Oxford","Role":"Software Engineer","Bio":"Biomedical Science graduate. Enjoy cycling and wine."},
// {"Name":"Angharad Beazley","Joining date":"07.09.20","Location":"London","Role":"Software Engineer","Bio":"Recent graduate into walking, travelling and anything dog related."},
// {"Name":"Avni Bhatt","Joining date":"07.09.20","Location":"London","Role":"Software Engineer","Bio":""},
// {"Name":"Talha Zubair","Joining date":"07.09.20","Location":"London","Role":"DevOps Engineer","Bio":"Physics grad with a love for cats, plants and computers."},
// {"Name":"Richard Snoad","Joining date":"07.09.20","Location":"London","Role":"Software Engineer","Bio":""},
// {"Name":"Hunor-Chris Bocz","Joining date":"07.09.20","Location":"Oxford","Role":"DevOps Engineer","Bio":"People-person with a passion for robotics. Always up for travelling."}]