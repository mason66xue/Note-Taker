
const { v4: uuidv4 } = require('uuid');
const notes = require('../db/db.json');
const path= require('path');
const fs =require('fs');


const notes= require ('express').Router();
const {readFromFile, readAndAppend}=require('../helpers/fsUtils');
const uuid = require ('../helpers/uuid');



// GET request for reviews
app.get('/routes/notes', (req, res) => {
  console.info(`${req.method} request received`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

  
//post 
tips.post('/routes/notes', (req, res) => {
  console.info(`${req.method} request received to add a tip`);
  console.log(req.body);

  const { title, text, id } = req.body;

  if (req.body) {
    const newNotes = {
      title,
      text,
      notes_id: uuid(),
    };

    readAndAppend(newNotes, './db/db.json');
    res.json(`Notes added successfully 🚀`);
  } else {
    res.error('Error in adding notes');
  }
});

module.exports = notes;
