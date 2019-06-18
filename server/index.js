require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

// CONTROLLERS
const auth_ctrl = require('./controllers/auth_controller');
const flt_ctrl = require('./controllers/flight_controller');

// SERVER, SESSION, AND DB CONNECTION SETUP 
const app = express();
const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET,
    ACCOUNTSID,
    AUTHTOKEN,
    MYNUMBER,
    FROMNUMBER
} = process.env;
app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );
app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
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
app.post('/auth/logout', auth_ctrl.logout); // LOGS OUT A USER

// ENDPOINTS - FLIGHT CONTROLLER
app.get('/api/flights', flt_ctrl.getFlights); // GETS ALL FLIGHTS
// app.post('/api/flightnotes', flt_ctrl.getNotes); // GETS ALL NOTES FOR FLIGHT
app.delete('/api/deleteflight/:id', flt_ctrl.deleteFlight); // DELETES A FLIGHT,ITS SERVICES, AND NOTES BY ID
app.put('/api/updateflight', flt_ctrl.updateFlight); // UPDATES A FLIGHT AND ITS SERVICES BY ID
app.post('/api/addflight', flt_ctrl.addFlight); // ADDS A FLIGHT

// ENDPOINTS - TWILIO SEND MESSAGE
app.post('/api/sendmessage', (req, res) => {
    const client = require('twilio')(ACCOUNTSID, AUTHTOKEN);
    const {message} = req.body;
    client.messages
        .create({
            body: message,
            from: FROMNUMBER,
            to: MYNUMBER
        })
        .then((res) => {
            res.send(JSON.stringify({ success: true }));
        })
        .catch((err) => {
            res.send(JSON.stringify({ success: false }));
        })
});
