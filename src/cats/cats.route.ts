import { Router } from 'express';
import {
    getAllCats,
    createCat,
    getCat,
    updateCat,
    updateCatData,
    deleteCat,
} from './cats.service';

const router = Router();

router.get('/cats', getAllCats);
router.get('/cats/:id', getCat);
router.post('/cats', createCat);
router.put('/cats/:id', updateCat);
router.patch('/cats/:id', updateCatData);
router.delete('/cats/:id', deleteCat);

export default router;
