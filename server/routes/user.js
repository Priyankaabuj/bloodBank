import { Router } from 'express';
const router = Router();
import { approveSignup, getPendingRequests, deleteUser, getApprovedRequests } from '../controllers/UserController.js';

// Approve user signup request
router.post('/approve', approveSignup);
router.get('/pending-requests', getPendingRequests);
router.get('/approved', getApprovedRequests);
router.delete('/:email', deleteUser);

export default router;
