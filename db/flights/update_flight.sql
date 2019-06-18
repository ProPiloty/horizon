UPDATE flights TABLE
SET dep_date = ${dep_date},
SET dep_time = ${dep_time},
SET dep_airport = ${dep_airport},
SET dep_location = ${dep_location},
SET arr_date = ${arr_date},
SET arr_time = ${arr_time},
SET arr_airport = ${arr_airport},
SET arr_location = ${arr_location},
SET aircraft_id = ${aircraft_id},
SET complete = ${complete},
SET contact_name = ${contact_name},
SET contact_number = ${contact_number}
WHERE flights.id = ${id};

UPDATE flight_services TABLE
SET fuel_status = ${fuel_status},
SET fuel_gal = ${fuel_gal},
SET fuel_type = ${fuel_type},
SET fuel_prist = ${fuel_prist},
SET lav_dump_status = ${lav_dump_status},
SET lav_fill_status = ${lav_fill_status},
SET lav_fill_gal = ${lav_fill_gal},
SET potable_status = ${potable_status},
WHERE flights.id = ${id};