var express = require('express');
var morgan = require('morgan');
var path = require('path');
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

app.get('/page3',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page3.html'));
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
