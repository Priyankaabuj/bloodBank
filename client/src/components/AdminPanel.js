import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
    const [signupRequests, setSignupRequests] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);
    const [approvedUsers, setApprovedUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/user/pending-requests')
            .then(response => {
                setPendingRequests(response.data);
            })
            .catch(error => {
                console.error('Error fetching pending requests:', error);
            });
    }, []);

    const handleApprove = (email) => {
        axios.post('http://localhost:5000/api/user/approve', { email })
            .then(() => {
                console.log('Signup request approved:', email);
                setSignupRequests(signupRequests.filter((request) => request.email !== email));
            })
            .catch((error) => console.error(error));
    };

    // approved
    useEffect(() => {
        // Fetch approved users from the backend
        axios.get('http://localhost:5000/api/user/approved')
            .then(response => {
                setApprovedUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching approved users:', error);
            });
    }, []);
    // delete user
    const handleDelete = (email) => {
        axios.delete(`http://localhost:5000/api/user/${email}`)
            .then(() => {
                setApprovedUsers(approvedUsers.filter((user) => user.email !== email));
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <h3>Signup Requests</h3>
            <ul>
                {pendingRequests.map((request) => (
                    <li key={request._id}>
                        {request.name} - {request.email}
                        <button onClick={() => handleApprove(request.email)}>Approve</button>
                    </li>
                ))}
            </ul>
            <h3>Approved Requests</h3>
            <ul>
                {approvedUsers.map((user) => (
                    <li key={user._id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleDelete(user.email)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
