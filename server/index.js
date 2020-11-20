var mysql = require('mysql');
var express = require('express');
var cors = require('cors');
const PORT = process.env.PORT || 4000;

var bodyParser = require('body-parser');

var app = express();
app.use(cors());

app.use(bodyParser.json());

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gopalraju',
  database: 'MOVIE_MUSIC',
});

con.connect((err) => {
  if (err) {
    console.log('Not Connected');
  } else {
    console.log('Connected!');

    //SignIng Up Users
    app.post('/signup', (req, res) => {
      var Name = req.body.theName;
      var Email = req.body.theEmail;
      var Password = req.body.thePassword;

      var sql = `INSERT INTO USER(USER_NAME, USER_EMAIL, USER_PASSWORD) VALUES ('${Name}',
            '${Email}',
           '${Password}')`;

      con.query(sql, function (err, result) {
        if (err) {
          res.send('ERROR');
        }
        //Else
        else {
          var sqlNextStep = `SELECT * FROM USER WHERE USER_EMAIL = '${Email}'`;
          con.query(sqlNextStep, function (err, result) {
            if (err) res.send('ERROR');
            //console.log(result);
            res.send(result);
          });
        }

        //console.log('1 record inserted' + '  ' + res);
        //res.send(result);
      });
    });

    //Adding Songs
    app.post('/SongAdd', (req, res) => {
      var Name = req.body.theName;
      var Singer = req.body.theSinger;
      var Lyric = req.body.theLyric;
      var Music = req.body.theMusic;
      var Dur = req.body.theDur;
      var Url = req.body.theUrl;
      var Platform = req.body.thePlatform;

      var sql = `INSERT INTO SONGS (SONG_NAME, SONG_SINGER, SONG_LYRICIST, SONG_MUSIC, SONG_DURATION, SONG_YEAR, SONG_IMAGE, P_ID) VALUES (
        '${Name}',
        '${Singer}',
        '${Lyric}',
        '${Music}',
        '${Dur}',
        '2020',
        '${Url}',
        ${Platform} 
    );`;
      con.query(sql, function (err, result) {
        if (err) res.send('ERROR');
        // console.log('1 record inserted' + '  ' + res);
        res.send(result);
      });
    });

    //Logging Up Users
    app.post('/login', (req, res) => {
      var Name = req.body.theName;
      var Email = req.body.theEmail;
      var Password = req.body.thePassword;
      console.log(Name + ' ' + Email + ' ' + Password);

      var sql = `SELECT * FROM USER WHERE USER_EMAIL = '${Email}'`;

      con.query(sql, function (err, result) {
        if (err) res.send('ERROR');
        res.send(result);
      });
    });

    //Fetching Subs
    app.post('/mySubs', (req, res) => {
      var UserID = req.body.theUserID;
      var sql = `SELECT * from subs where user_id=${UserID}`;

      con.query(sql, function (err, result) {
        if (err) res.send('ERROR');
        console.log(result);
        res.send(result);
      });
    });

    //Fetching Movies
    app.get('/movies', (req, res) => {
      var sql = `SELECT * FROM movies`;

      con.query(sql, function (err, result) {
        if (err) res.send('ERROR');
        console.log(result);
        res.send(result);
      });
    });

    //Fething Songs
    app.get('/songs', (req, res) => {
      var sql = `SELECT * FROM songs`;

      con.query(sql, function (err, result) {
        if (err) res.send('ERROR');
        console.log(result);
        res.send(result);
      });
    });

    //Fething Series
    app.get('/series', (req, res) => {
      var sql = `SELECT * FROM series`;

      con.query(sql, function (err, result) {
        if (err) res.send('ERROR');
        console.log(result);
        res.send(result);
      });
    });

    //Fetching Description for Series
    app.post('/descriptionSeries', (req, res) => {
      var Name = req.body.theMovie;
      var sql = `select s_name,s_image,s_desc, s_id, s_cast, p_id from series where s_name = '${Name}'`;

      con.query(sql, function (err, result) {
        if (err) res.send('ERROR');
        console.log(result);
        res.send(result);
      });
    });

    //Fetching Description for Movies
    app.post('/description', (req, res) => {
      var Name = req.body.theMovie;
      var sql = `select m_name,m_image,m_desc, m_id, p_id from movies where m_name = '${Name}'`;

      con.query(sql, function (err, result) {
        if (err) res.send('ERROR');
        console.log(result);
        res.send(result);
      });
    });
  }
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
