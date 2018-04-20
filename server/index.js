require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const con = require('./controller')

const {CONNECTION_URI} = process.env

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_URI).then(dbInstance => {
    app.set('db', dbInstance)
})

app.post('/register', con.newUser)
app.post('/login', con.login)

// app.get('/posts', con.allPosts)

app.listen(3005, () => console.log("3005 nightmares await you"))