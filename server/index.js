import express from 'express';
import { connect } from 'mongoose';
import pkg from 'body-parser';
const { json } = pkg;
import cors from 'cors';
import { mongoURI } from '../server/config.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(json());

connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
