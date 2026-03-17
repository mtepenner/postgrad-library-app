import express from 'express';
import { getAllBooks, addBook } from '../controllers/bookController.js';
import { verifyToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// All logged-in users (Visitors and Admins) can view the catalog
router.get('/', verifyToken, getAllBooks);

// ONLY Admins can add new books to the database
router.post('/', requireAdmin, addBook);

export default router;
