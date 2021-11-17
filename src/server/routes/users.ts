import * as express from 'express';
import db from '../db';


const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await db.users.all();
        res.json(users);
    } catch (err) {
        console.log(err);
        res.json(err)
    }
});

export default router;