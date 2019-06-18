INSERT INTO users
(firstname, lastname, email, password)
VALUES
(${firstname}, ${lastname}, ${email}, ${password})
RETURNING firstname, id;