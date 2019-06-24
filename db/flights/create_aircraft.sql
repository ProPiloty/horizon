INSERT INTO aircraft (aircraft_type, tail_number)
VALUES (${aircraft_type}, ${tail_number})
RETURNING id;