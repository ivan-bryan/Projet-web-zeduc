import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header1.css';
import logo from '../images/icon.png'; // Import du logo
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Zeduc SPACE" className="logo-image" />
      </div>

      {/* Bouton Burger pour mobile */}
      <div className="burger-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
      <Link to="/commandes">Commandes</Link>
      <Link to="/ComptesEmployes">Comptes Employés</Link>
      <Link to="#">Statistiques</Link>
      <Link to="/Reclamations">Réclamations</Link>
      <Link to="/MenuGestion">Gestion du Menu</Link>
      </nav>

      <div className="account">
        <a href="#"><FaUser className="user-icon" /></a> 
        <span className="account-text">Mon compte</span>
      </div>
    </header>
  );
}

export default Header;
