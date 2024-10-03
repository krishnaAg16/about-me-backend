import express from 'express';
import Data from '../models/data.js';

const router = express.Router();

router.post('/', async (req, res) => {

    try {
        const newData = new Data(req.body);
        const saved = await newData.save();
        res.status(201).json({ id: saved._id, message: 'Data uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error, could not upload data' });
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const data = await Data.findOne({ slug: req.params.slug.toLowerCase() });
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
});

export default router;

