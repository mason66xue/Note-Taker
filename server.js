const express =require('express');
const path=require('path');
const app=express();
// const { clog } = require('./middleware/clog');
// const api = require('./routes/index.js');

const PORT =process.env.PORT || 3000;

// const fs=requier('fs');
// app.use(clog);
// init express 

//set a static folder 
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);


//set up listner
app.listen(PORT,()=> console.log('server started on port '))


