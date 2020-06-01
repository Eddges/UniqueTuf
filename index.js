const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const app = express();
app.use(express.static(path.join(__dirname,'views')));

//Loading View Engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Index page
app.get('/', (req, res)=>{
    res.render('index', {
        
    })
})

//About page
app.get('/about', (req, res)=>{
    res.render('about', {

    })
})

//Connect page
app.get('/connect', (req, res)=>{
    res.render('connect', {
        
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));
