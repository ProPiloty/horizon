INSERT INTO FLIGHTS (
    aircraft_id,
    arr_airport,
    arr_date,
    arr_location,
    arr_time,
    complete,
    contact_name,
    contact_number,
    dep_airport,
    dep_date,
    dep_location,
    dep_time)
VALUES (
    ${aircraft_id},
    ${arr_airport},
    ${arr_date},
    ${arr_location},
    ${arr_time},
    ${complete},
    ${contact_name},
    ${contact_number},
    ${dep_airport},
    ${dep_date},
    ${dep_location},
    ${dep_time}
);