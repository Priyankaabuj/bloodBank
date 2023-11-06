import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import SignupRequest from '../models/SignupRequest.js';
import User from '../models/User.js';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await SignupRequest.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const signupRequest = new SignupRequest({ name, email, password });
        await signupRequest.save();

        res.status(201).json({ message: 'Signup request submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create and send JWT token for successful authentication
        const token = jwt.sign({ userId: user._id }, config.secretKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};
