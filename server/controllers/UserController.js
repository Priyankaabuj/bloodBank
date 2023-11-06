import SignupRequest from '../models/SignupRequest.js';
import User from '../models/User.js';

export const approveSignup = async (req, res) => {
    const { email } = req.body;

    try {
        const signupRequest = await SignupRequest.findOne({ email });

        if (!signupRequest) {
            return res.status(404).json({ message: 'Signup request not found' });
        }


        const { name, password } = signupRequest;
        const user = new User({ name, email, password });
        await user.save();

        res.status(200).json({ message: 'Signup request approved' });

        await signupRequest.deleteOne();
    } catch (error) {
        console.error('Error approving signup:', error);
        res.status(500).json({ message: 'An error occurred during approval', error });
    }
};

export const getPendingRequests = async (req, res) => {
    try {
        const pendingRequests = await SignupRequest.find();
        res.status(200).json(pendingRequests);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};

export const deleteUser = async (req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'An error occurred while deleting the user', error });
    }
};

export const getApprovedRequests = async (req, res) => {
    try {
        const ApprovedRequests = await User.find();
        res.status(200).json(ApprovedRequests);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};