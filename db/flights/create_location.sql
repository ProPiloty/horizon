INSERT INTO locations (airport_id)
VALUES (${airport_id})
RETURNING id;