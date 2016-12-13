var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.render("index.html");
});

app.set('port', process.env.PORT || 3050);

// views for rendering
app.set("view engine", "ejs");
app.engine("html", require('ejs').renderFile);

app.set("views", __dirname);
app.use("/static", express.static(__dirname+"/static"));


app.use(function(req,res){
  res.type("text/plain");
  res.status("404");
  res.send("404 - Not found");
});
app.use(function(req,res){
  res.type("text/plain");
  res.status("500");
  res.send("500 - server error");
});


app.listen(app.get('port'), function() {
 console.log('Express Server is running at localhost:' + app.get('port'));
});
