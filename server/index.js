require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const con = require('./controller')

const {CONNECTION_URI, SESSION_SECRET} = process.env

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_URI).then(dbInstance => {
    app.set('db', dbInstance)
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))

app.post('/register', con.newUser)
app.post('/login', con.login)

app.get('/posts', con.allPosts)

app.get('/api/auth/me', con.refresh)

app.post('/api/auth/logout', con.logout)



app.listen(3005, () => console.log("3005 nightmares await you"))