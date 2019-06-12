module.exports = {
    getFlights: async (req, res) => {
        // const role = this.params;
        const db = req.app.get('db');
        const {session} = req;
        const id = session.user.id
        const fboFlights = await db.flights.get_fbo_flights({id});
        const flightsOutput = fboFlights.sort((a, b) => {
            var aTime = (a.location_id === a.dep_location) ? a.dep_time : a.arr_time;
            var bTime = (b.location_id === b.dep_location) ? b.dep_time : b.arr_time;
            return ((aTime < bTime) ? -1 : (aTime > bTime) ? 1 : 0);
        })
        if (!fboFlights) return res.status(444).send('No response from database.')
        return res.status(200).send(flightsOutput);
    }
}