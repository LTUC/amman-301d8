'use strict';


let express = require('express');
let cors = require('cors');
let pg = require('pg');

require('dotenv').config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

let client = new pg.Client(DATABASE_URL);

let app = express();
app.use(cors());

// /allpeople
app.get('/allpeople',handleGettingPeople);
app.get('/addpeople',handleAddingPeople);
app.use('/*',handleWrongPaths);


function handleGettingPeople (req,res){
  // get the data from the database ...
  client.query('SELECT * FROM people;').then(data => {
    res.send(data.rows);
  }).catch(err => {
    res.send('sorry .. an error occured while reading from the database ...',err);
  });
}

function handleAddingPeople(req,res){
  let fname = req.query.first;
  let lname = req.query.second;

  let statement = 'INSERT INTO people(first_name,last_name) values ($1,$2) RETURNING *;';
  let values = [fname,lname];

  client.query(statement, values).then(insertedRecord =>{
    res.send(insertedRecord.rows);
  }).catch(err =>{
    res.send(`sorry .. an error occured while inserting ... ${err}`);
  });


  //client.query()
}

function handleWrongPaths(req,res){
  res.status(404).send('page not found');
}



client.connect().then(()=>{
  app.listen(PORT, ()=>{
    console.log(`App listening to port ${PORT}`);
  });
}).catch(err =>{
  console.log('Sorry ... and error occured ..', err);
});
