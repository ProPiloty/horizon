INSERT INTO users
(firstname, lastname, email, password)
VALUES
(${firstname}, ${lastname}, ${email}, ${password})
RETURNING firstname, id;

INSERT INTO user_roles
(fboadmin, flmadmin, student, passenger)
VALUES
(${fboadmin}, ${flmadmin}, ${student}, ${passenger});