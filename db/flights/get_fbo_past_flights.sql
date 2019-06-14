SELECT fl.id, fl.aircraft_id, fl.dep_date, fl.dep_time, fl.dep_airport, fl.arr_date, fl.arr_time, fl.arr_airport, air.tail_number, air.aircraft_type, us.location_id, fl.dep_location, fl.arr_location
FROM users us
JOIN locations loc
ON loc.id = us.location_id
JOIN flights fl
ON fl.arr_location = loc.id OR fl.dep_location = loc.id
JOIN aircraft air
ON fl.aircraft_id = air.id
WHERE us.id = ${id} AND fl.complete = true;