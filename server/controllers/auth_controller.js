const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {firstname, lastname, email, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        const userFound = await db.auth.check_user_email({email});
        if (userFound[0]) return res.status(409).send('User already exists');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const createdUser = await db.register_user({
            firstname,
            lastname,
            email,
            password: hash
        });
        session.user = {
            id: createdUser[0].login_id,
            username: createdUser[0].firstname
        };
        res.status(200).send(session.user);
    },
    login: async (req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');
        const {session} = req;
        const userFound = await db.auth.check_user_email({email});
        if (!userFound[0]) return res.status(401).send('User not found');
        const authenticated = bcrypt.compareSync(password, userFound[0].password);
        if (authenticated) {
            session.user = {
                id: userFound[0].login_id,
                username: userFound[0].firstname
            };
            return res.status(200).send(session.user);
        } else {
            return res.status(401).send('Incorrect username or password');
        }
    },
    getUser: (req, res) => {
        
    },
    logout: (req, res) => {

    }
};