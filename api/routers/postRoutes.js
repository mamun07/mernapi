import express from 'express';
import {
  getallPost,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postControllers.js';

const router = express.Router();

// Poset Routers
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/:id', getPost);
router.get('/', getallPost);

export default router;
