var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
<<<<<<< HEAD

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Page1.html'));
});

=======
app.get('/',function(req, res){ res.sendFile(path.join(__dirname,'ui', 'page1.html'));
    
});
>>>>>>> 4b71ee66cc282044b9d2ea2491f7cef62ab394f4
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
