
import React, { useState, useEffect } from 'react';
import './CommonAdmin.css';

const ComplaintsManagement = () => {
    const [complaints] = useState([
        { id: 1, student: 'John Doe', issue: 'Commande incorrecte', status: 'En cours' },
        { id: 2, student: 'Jane Smith', issue: 'Livraison en retard', status: 'Résolu' }
    ]);

    const resolveComplaint = (id) => {
        // Logic to resolve a complaint
    };

    return (
        <div className="admin-page">
            <h2>Suivi des Réclamations</h2>
            <table>
                <thead>
                    <tr>
                        <th>Étudiant</th>
                        <th>Problème</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map((complaint) => (
                        <tr key={complaint.id}>
                            <td>{complaint.student}</td>
                            <td>{complaint.issue}</td>
                            <td>{complaint.status}</td>
                            <td>
                                {complaint.status !== 'Résolu' && (
                                    <button onClick={() => resolveComplaint(complaint.id)}>Résoudre</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComplaintsManagement;
