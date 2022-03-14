//Daniel McColm
//251092776
const express = require('express');
let jobs = require('./jobs.json');

const app = express();


app.use(express.static('static'));




app.get('/jobs', (req,res) => {

      res.json(jobs);
  })


app.listen(3000);