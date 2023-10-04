const express = require('express');
const app = express();
require('./src/machineHistory')

// set the view engine to ejs
app.set('view engine', 'ejs');
//settings
app.set('port', process.env.PORTOEE || 8000);
//static files
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  const data = {
    title: 'Mi página web',
    message: 'Bienvenido a mi página web'
  };
  res.render('index', data);
});
//start server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});

