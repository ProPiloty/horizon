require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const auth_ctrl = require('./controllers/auth_controller')

const app = express();
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

massive(CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('Database Connected');
    app.listen(SERVER_PORT, () => {
        console.log(`Server Listening On Port: ${SERVER_PORT}`)
    })
});

// ENDPOINTS - AUTH CONTROLLER
app.post('/auth/checkemail', auth_ctrl.checkEmail); // CHECKS EXISTANCE OF USER ACCOUNT
app.get('/auth/checklogin', auth_ctrl.getUser); // CHECKS IF USER IS LOGGED IN
app.post('/auth/login', auth_ctrl.login); // LOGS IN USER
app.post('/auth/register', auth_ctrl.register); // REGISTERS A NEW USER

// ENDPOINTS - FLIGHT CONTROLLER
app.get('/api/flights'); // GETS ALL SCHEDULED FLIGHTS