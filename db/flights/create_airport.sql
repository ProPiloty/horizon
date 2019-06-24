INSERT INTO airports (airport_code)
VALUES (${airport_code})
RETURNING id;