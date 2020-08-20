const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 3000;

// Defining paths for express configuration

const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

// setup static directory
app.use(express.static(publicDirectoryPath));


// setting up handle bars views engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// event form route
app.get('/event', (req, res) => {
    res.render('event', {
       title: 'Create Event'
    }); // 1. index.hbs file 
});

app.get('', (req, res) => {
    res.render('index', {
       title: 'Home'
    }); // 1. index.hbs file 
});

app.listen(port, ()=>{
    console.log('Server started at port '+port);
})
