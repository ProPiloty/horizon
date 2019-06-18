DELETE FROM flights
WHERE id = ${id};

DELETE FROM flight_services
WHERE flight_id = ${id};