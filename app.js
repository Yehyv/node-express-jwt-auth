const express = require('express');
const mongoose = require('mongoose');
const authRoutes= require('./routes/authRoutes');
const cookieRoutes= require('./routes/cookieRoutes');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://admin:damnpeoplee231@node-auth.fjqxa.mongodb.net/?retryWrites=true&w=majority&appName=node-auth';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);
app.use(cookieRoutes);