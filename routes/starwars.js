var express = require('express');
var router = express.Router();
var axios = require('axios');

const characterDB = {
  str: ''
}

const genHTML = (resp) => {
  let characterName = resp.data.name;
  let films = resp.data.films;
  let characterFilms = '';
  films.forEach(element => {
    characterFilms  = `${characterFilms}<p>${element}</p>\n`
    return characterFilms;
  });
  let str = `<div>${characterName}</div>\n<div>${characterFilms}`;
  characterDB.str = str;
}

router.get('/', function(req, res) {
  res.render('index', characterDB);
});

router.get('/:num', (req, res) => {
  let tempNum = req.params.num;
  axios.get(`https://swapi.dev/api/people/${tempNum}/`)
  .then((response1) => {
    genHTML(response1);
    res.render('index', characterDB);
  })
  .catch((err) => { 
    console.log(err.response.data); 
    res.send('Character not found');
  })
});

module.exports = router;

