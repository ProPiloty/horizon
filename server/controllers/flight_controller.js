module.exports = {
    getFlights: async (req, res) => {
        const db = req.app.get('db');
        const {session} = req;
        const id = session.user.id
        const fboScheduledFlights = await db.flights.get_fbo_scheduled_flights({id});
        const fboPastFlights = await db.flights.get_fbo_past_flights({id});
        const flightSorter = (flights) => {
            return flights.sort((a, b) => {
            const aTime = (a.location_id === a.dep_location) ? a.dep_time : a.arr_time;
            const aTimeCorrected = +aTime.split(':').join('');
            const aDate = (a.location_id === a.dep_location) ? a.dep_date : a.arr_date;
            const aDateCorrected = new Date(aDate).valueOf();
            const aComp = aDateCorrected + aTimeCorrected;

            const bTime = (b.location_id === b.dep_location) ? b.dep_time : b.arr_time;
            const bTimeCorrected = +bTime.split(':').join('');
            const bDate = (b.location_id === b.dep_location) ? b.dep_date : b.arr_date;
            const bDateCorrected = new Date(bDate).valueOf();
            const bComp = bDateCorrected + bTimeCorrected;

            return (aComp - bComp);
            });
        };
        const scheduledFlights = flightSorter(fboScheduledFlights);
        const pastFlights = flightSorter(fboPastFlights);
        const flightsOutput = {scheduledFlights, pastFlights};
        if (!flightsOutput) return res.status(444).send('No response from database.');
        return res.status(200).send(flightsOutput);
    },
    // getNotes: async (req, res) => {
    //     const db = req.app.get('db');
    //     const {flight_id} = req.body;
    //     const notes = db.get_flight_notes({flight_id});
    //     if (!notes[0]) return res.status(444).send('No response from database.');
    //     return res.status(200).send(notes);
    // },
    deleteFlight: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.flights.delete_flight({id})
            .then(() => {
                res.sendStatus(200)
            });
    },
    updateFlight: async (req, res) => {
        const db = req.app.get('db');
        db.updateFlight();
        res.sendStatus(200);
    },
    addFlight: async (req, res) => {
        const db = req.app.get('db');
        const {flightDetails} = req.body
        const {
            tail_number,
            aircraft_type
        } = flightDetails;

        // CHECKS FOR EXISTANCE OF AIRCRAFT
        const aircraft = await db.flights.check_aircraft({tail_number});
        let aircraftID;
        if (!aircraft[0]) {
            const newAircraft = await db.flights.create_aircraft({aircraft_type, tail_number});
            aircraftID = newAircraft[0].id;
        } else {
            aircraftID = aircraft[0].id;
        }

        // CHECKS FOR DEPARTURE AIRPORT EXISTANCE IN DB
        const depAirport = await db.flights.check_airport({airport_code: flightDetails.dep_airport});
        let depAirportID;
        if (!depAirport[0]) {
            const newDepAirport = await db.flights.create_airport({airport_code: flightDetails.dep_airport});
            depAirportID = newDepAirport[0].id;
        } else {
            depAirportID = depAirport[0].id;
        }

        // CHECKS FOR ARRIVAL AIRPORT EXISTANCE IN DB
        const arrAirport = await db.flights.check_airport({airport_code: flightDetails.arr_airport});
        let arrAirportID;
        if (!arrAirport[0]) {
            const newArrAirport = await db.flights.create_airport({airport_code: flightDetails.arr_airport});
            arrAirportID = newArrAirport[0].id;
        } else {
            arrAirportID = arrAirport[0].id;
        }

        // CHECKS
        const depAirportLocation = await db.flights.check_locations({airport_id: depAirportID});
        let depAirportLocID;
        if (!depAirportLocation[0]) {
            const newLocation = await db.flights.create_location({airport_id: depAirportID});
            depAirportLocID = newLocation[0].id;
        } else {
            depAirportLocID = depAirportLocation[0].id;
        }

        // CHECKS
        const arrAirportLocation = await db.flights.check_locations({airport_id: arrAirportID});
        let arrAirportLocID;
        if (!arrAirportLocation[0]) {
            const newLocation = await db.flights.create_location({airport_id: arrAirportID});
            arrAirportLocID = newLocation[0].id;
        } else {
            arrAirportLocID = arrAirportLocation[0].id;
        }

        const fullFlightDetails = {
            ...flightDetails,
            aircraft_id: aircraftID,
            dep_location: depAirportLocID,
            arr_location: arrAirportLocID
        }

        const flightId = await db.flights.add_flight(fullFlightDetails);
        fullFlightDetails.id = flightId[0].id;
        db.flights.add_flight_services(fullFlightDetails);
        res.sendStatus(200);
    },
    updateFlight: async (req, res) => {
        const db = req.app.get('db');
        const {flightDetails} = req.body;
        const {
            tail_number,
            aircraft_type
        } = flightDetails;

        // CHECKS FOR EXISTANCE OF AIRCRAFT
        const aircraft = await db.flights.check_aircraft({tail_number});
        let aircraftID;
        if (!aircraft[0]) {
            const newAircraft = await db.flights.create_aircraft({aircraft_type, tail_number});
            aircraftID = newAircraft[0].id;
        } else {
            aircraftID = aircraft[0].id;
        }

        // CHECKS FOR DEPARTURE AIRPORT EXISTANCE IN DB
        const depAirport = await db.flights.check_airport({airport_code: flightDetails.dep_airport});
        let depAirportID;
        if (!depAirport[0]) {
            const newDepAirport = await db.flights.create_airport({airport_code: flightDetails.dep_airport});
            depAirportID = newDepAirport[0].id;
        } else {
            depAirportID = depAirport[0].id;
        }

        // CHECKS FOR ARRIVAL AIRPORT EXISTANCE IN DB
        const arrAirport = await db.flights.check_airport({airport_code: flightDetails.arr_airport});
        let arrAirportID;
        if (!arrAirport[0]) {
            const newArrAirport = await db.flights.create_airport({airport_code: flightDetails.arr_airport});
            arrAirportID = newArrAirport[0].id;
        } else {
            arrAirportID = arrAirport[0].id;
        }

        // CHECKS
        const depAirportLocation = await db.flights.check_locations({airport_id: depAirportID});
        let depAirportLocID;
        if (!depAirportLocation[0]) {
            const newLocation = await db.flights.create_location({airport_id: depAirportID});
            depAirportLocID = newLocation[0].id;
        } else {
            depAirportLocID = depAirportLocation[0].id;
        }

        // CHECKS
        const arrAirportLocation = await db.flights.check_locations({airport_id: arrAirportID});
        let arrAirportLocID;
        if (!arrAirportLocation[0]) {
            const newLocation = await db.flights.create_location({airport_id: arrAirportID});
            arrAirportLocID = newLocation[0].id;
        } else {
            arrAirportLocID = arrAirportLocation[0].id;
        }

        const fullFlightDetails = {
            ...flightDetails,
            aircraft_id: aircraftID,
            dep_location: depAirportLocID,
            arr_location: arrAirportLocID
        }

        await db.flights.update_flight(fullFlightDetails);
        res.sendStatus(200);
    }
};