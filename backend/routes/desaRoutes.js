import express from 'express';
import {
  getDesaData,
  initDesaData,
  updateDesaData,
  updateDesaField,
  deleteDesaData,
} from '../controllers/desaController.js';

const router = express.Router();

// Public routes
router.get('/', getDesaData);

// Admin routes (tambahkan middleware auth di sini nanti)
router.post('/init', initDesaData);
router.put('/', updateDesaData);
router.patch('/:field', updateDesaField);
router.delete('/', deleteDesaData);

export default router;
