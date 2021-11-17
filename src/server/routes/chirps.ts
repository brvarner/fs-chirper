import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:id?', async (req, res) => {
	const id = Number(req.params.id);
	if (id) {
		try {
			const [chirp] = await db.chirps.one(id);
			res.json(chirp);
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: `We're having trouble getting the chirps right now, try again later please!`, error: 'Whoops!'});
		}
	} else {
		try {
			const chirps = await db.chirps.all();
			console.log(chirps.length);
			res.json(chirps);
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: `We're having trouble getting the chirps right now, try again later please!`, error: 'Whoops!'});
		}
	}

});

router.post('/', async (req, res) => {
	const chirp = req.body;
	try {
		const { insertId } = await db.chirps.insert(chirp.userid, chirp.content);
		res.status(201).json({ insertId, msg: 'Chirp Inserted!'});
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: `We're having trouble getting the chirps right now, try again later please!`, error: 'Whoops!'});
	}
});

router.put('/:id', async (req, res) => {
	const chirp = req.body;
	const id = Number(req.params.id);
	try {
		const result = await db.chirps.update(id, chirp.message);
		res.json({ msg: `Chirp $"{id} Updated`, result});
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: `We're having trouble getting the chirps right now, try again later please!`, error: 'Whoops!'});
	}
});

router.delete('/:id', async (req, res) => {
	const id = Number(req.params.id);
	try {
		const result = await db.chirps.destroy(id);
		res.json({ msg: `Chirp ${id} Deleted!`, result});
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: `We're having trouble getting the chirps right now, try again later please!`, error: 'Whoops!'});
	}
});

export default router;