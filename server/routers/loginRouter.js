import { Router } from 'express';
const router = Router();
import db from '../database/connection.js';
import { comparePassword } from '../util/hashing.js';

// login
router.post('/auth', async (req, res) => {
    try {
        const userPassword = await db.get('SELECT password FROM users where username = (?)', [
            req.body.username,
        ]);
        const boolean = await comparePassword(req.body.password, userPassword.password);

        if (!boolean) {
            return res
                .status(404)
                .send({ errorMessage: 'Provided password is incorrect. Please try again.' });
        }
        return res.status(200).send({ message: 'User successfully validated' });
    } catch (error) {
        console.log(error);
        return res.status(404).send({
            errorMessage: "Provided user name is incorrect, or doesn't exist. Please try again.",
        });
    }
});

export default router;
