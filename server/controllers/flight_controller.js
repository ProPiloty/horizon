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
        // DESTRUCTURE FLIGHT FOR SQL
        db.updateFlight();
        res.sendStatus(200);
    },
    addFlight: async (req, res) => {
        const db = req.app.get('db');
        const {flightDetails} = req.body
        console.log(flightDetails);
        db.add_flight({})

    }
}