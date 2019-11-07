const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');
const methodOverride = require('method-override');
const session = require('express-session');

app.use(express.static(path.join(__dirname, '/public')));

//settings
app.set('views', path.join(__dirname, '/views'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// app.engine('.hbs', exphbs({
//     defaultLayout: 'main',
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     partialsDir: path.join(app.get('views'), 'partials'),
//     extname: '.hbs'
// }));
app.set('view engine', '.hbs');



// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(cors());


//routes
app.use('/user', require('./routes/usuarios.routes'));
app.use('/login', require('./routes/login.routes'));



// statics


module.exports = app;