//Require Dependencies
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

//Initialize Express
const server = express();

//Global Variabres
const serviceAccount = require('./config/serviceAccountKey.json');

//Initalize Firestore
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://idea-98945.firebaseio.com'
});

//Initialize bodyParser
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
//server.use(bodyParser.json());

//Setup Stactic Path
server.use(express.static(path.join(__dirname, 'public')));
server.set('views', path.join(__dirname, 'public'));

//Load Routes
const api_user = require('./routes/user');
const profile = require('./routes/profile');
const post = require('./routes/post');
const posts = require('./routes/posts');

//Passport Config
require('./config/passport')(passport);

//Use Routes
server.use('/api/user', api_user);
server.use('/api/profile', profile);
server.use('/api/post', post);
server.use('/api/posts', posts);

//Express Session & Cookie Middleware
//server.set('trust proxy', 1); // trust first proxy
server.use(
  session({
    secret: 'LKDASO&$Q#(98zsdkhjfasdn123.zxfvnabnwlgn',
    resave: true,
    saveUninitialized: true
    //cookie: { secure: false }
  })
);

//Passport Session Middleware
server.use(passport.initialize());
server.use(passport.session());

//Initalize Connect-Flash
server.use(flash());

//Global Variables 2
server.use((req, res, next) => {
  res.locals.succuess_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

//Landing Page
server.get('/', (req, res) => {
  res.send('Yo:' + Date.now());
  console.log(req.session);
});

//GET Error Handling
server.get('*', (req, res) => {
  res.send('Page Not Found!');
});

//POST Error Handling
server.post('*', (req, res) => {
  res.send('Internal Error!');
});

//Server Starts
const port = 3000;
server.listen(port, () => {
  console.log(`Server started on ${port}`);
});