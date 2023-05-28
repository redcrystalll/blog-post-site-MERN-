import express from 'express';
import {
    createDataPotonganGaji, deleteDataPotongan, updateDataPotongan, viewDataPotongan
} from "../controllers/TransaksiController.js";
import { adminOnly, verifyUser } from '../middleware/AuthUser.js'

const router = express.Router();

router.get('/data_potongan', viewDataPotongan);
router.post('/data_potongan', createDataPotonganGaji);
router.patch('/data_potongan/update/:id', updateDataPotongan);
router.delete('/data_potongan/:id', deleteDataPotongan);

export default router;