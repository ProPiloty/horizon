UPDATE flights
SET dep_date = ${dep_date},
    dep_time = ${dep_time},
    dep_airport = ${dep_airport},
    dep_location = ${dep_location},
    arr_date = ${arr_date},
    arr_time = ${arr_time},
    arr_airport = ${arr_airport},
    arr_location = ${arr_location},
    aircraft_id = ${aircraft_id},
    complete = ${complete},
    contact_name = ${contact_name},
    contact_number = ${contact_number}
WHERE id = ${id};

UPDATE flight_services
SET fuel_status = ${fuel_status},
    fuel_gal = ${fuel_gal},
    fuel_type = ${fuel_type},
    fuel_prist = ${fuel_prist},
    lav_dump_status = ${lav_dump_status},
    lav_fill_status = ${lav_fill_status},
    lav_fill_gal = ${lav_fill_gal},
    potable_status = ${potable_status}
WHERE flight_id = ${id};