var express = require("express");
var app = express();
const api = require('./api')

//create a server object:
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/api/fetching", function(req, res) {
  var xml = req.query.xml;
  
  api.queryDian(`${xml}`,"responseXML")
  .then(xmlResult => 
    res.render('resultado',{data:xmlResult}));

  res.render("index");
});

app.get('/results', function(req, res){
    var convert = req.query.convert;

    api.query(`${convert}`, "FahrenheitToCelsiusResult")
    .then(xmlResult => 
        res.render('results', {data: xmlResult}));
});


app.listen(process.env.PORT || 3028, process.env.IP, function() {
  console.log("Server is listening on http://localhost:3028");
});