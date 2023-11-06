import { Router } from 'express';
import { body } from 'express-validator';
const router = Router();
import { signup, login } from '../controllers/AuthController.js';

// Signup
router.post('/signup', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    signup,
]);

// Login
router.post('/login', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    login,
]);

export default router;
