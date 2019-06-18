const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {firstname, lastname, email, password, fboadmin, flmadmin, student, passenger} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        const userFound = await db.auth.check_user_email({email});
        if (userFound[0]) return res.status(409).send('User already exists');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const createdUser = await db.auth.register_user({
            firstname,
            lastname,
            email,
            password: hash
        });
        db.auth.register_roles({
            id: createdUser[0].id,
            fboadmin, 
            flmadmin, 
            student, 
            passenger
        }).then(() => {
            session.user = {
                id: createdUser[0].id,
                username: createdUser[0].firstname
            };

            res.status(200).send(session.user);
        })
    },
    checkEmail: async (req, res) => {
        const {email} = req.body;
        const db = req.app.get('db');
        const userFound = await db.auth.check_user_email({email});
        if (userFound[0]) {
            return res.status(200).send('User found');
        } else {
            return res.status(401).send('User not found');
        }
    },
    login: async (req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        const userFound = await db.auth.check_user_email({email});
        const {id} = userFound[0];
        const userRoles = await db.auth.get_user_roles({id})
        const {
            fboadmin,
            flmadmin,
            student,
            passenger,
            csr,
            lst,
            flight_crew,
            flight_instructor } = userRoles[0];
        if (!userFound[0]) return res.status(401).send('User not found');
        const authenticated = bcrypt.compareSync(password, userFound[0].password);
        if (authenticated) {
            session.user = {
                id: userFound[0].id,
                username: userFound[0].firstname,
                fboadmin,
                flmadmin,
                student,
                passenger,
                csr,
                lst,
                flight_crew,
                flight_instructor
            };
            return res.status(200).send(session.user);
        } else {
            return res.status(401).send('Incorrect username or password');
        }
    },
    getUser: (req, res) => {
        const {session} = req;

        if (session.user) {
            return res.status(200).send(session.user);
        } else {
            return res.status(401).send('Please log in')
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
};