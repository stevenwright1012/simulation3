require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const {CONNECTION_URI} = process.env

const app = express();
app.use(bodyParser);

massive(CONNECTION_URI).then(dbInstance => {
    app.set('db', dbInstance)
})



app.listen(3005, () => console.log("3005 nightmares await you"))