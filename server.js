var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;
var config = {
    user : 'ganeshvasekar',
    database: 'ganeshvasekar',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: prosses.env.DB_PASSWORD
};

var pool = new pool(config);
app.get('/ article/:articleName', function (req, reg){
    //make a select request
    // return respond with result
    pool.query( "SELECT * FROM article WHERE title ='" + req.params.articleName +"'", function (err, result)
    {
        if(err){
            res.status(500).send(err.toString());
        }
            else{
                if(result.row.length ===0){
                    res.status(404).send('article Not found');
                }
                else{
                    var articleData = result.rows[0];
                    res.send(createTemplate(articleData));
                }
            }
    });
});
var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/page1',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});

app.get('/page2',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page2.html'));
});

app.get('/ganesh',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ganesh.html'));
});

app.get('/Contact',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Contact.html'));
});


app.get('/',function(req, res){ res.sendFile(path.join(__dirname,'ui', 'page1.html'));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/g.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'g.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
