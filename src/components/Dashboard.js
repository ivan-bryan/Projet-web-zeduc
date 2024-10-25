import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Importez le CSS du Dashboard

const Dashboard = () => {
  const navigate = useNavigate(); // Pour naviguer vers les pages

  const activities = [
    { id: 1, title: 'Gestion des Commandes', color: '#f7b700', image: '📦', path: '/Commandes' },
    { id: 2, title: 'Comptes Employés', color: '#ff8757', image: '👥', path: '/employees' },
    { id: 3, title: 'Gestion du Menu', color: '#f5a3b4', image: '🍜', path: '/MenuGestion' },
    { id: 4, title: 'Statistiques', color: '#d4c4fb', image: '📊', path: '/statistics' },
    { id: 5, title: 'Gestion des Réclamations', color: '#9ae3b0', image: '🛠️', path: '/Reclamations' },
  ];

  return (
    <div className="dashboard">
      <h1>Bienvenue dans l’espace Gérant</h1>
      <h2>Vos activités</h2>
      <div className="activities">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="activity-card"
            style={{ backgroundColor: activity.color }}
          >
            <span className="activity-image">{activity.image}</span>
            <button 
              className="activity-button"
              onClick={() => navigate(activity.path)}
            >
              {activity.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
