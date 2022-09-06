import express from 'express';
import { getPost, createPost } from '../controllers/postControllers.js';

const router = express.Router();

// Poset Routers
router.post('/', createPost);
router.get('/all', getPost);

export default router;
