const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');


//settings
app.set('port', 3000);
app.use(morgan('dev'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



//middleware



//routes
app.use(require('./routes/route'));


// static Files
app.use(express.static(path.join(__dirname, 'public')))

//Server
app.listen(app.get('port'), () => {
    console.log('listen on port', app.get('port'))
});







