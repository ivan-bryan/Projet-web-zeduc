import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import backgroundicon from'../images/icon1.png';
import backgroundtel from'../images/tel.png';
import backgroundloc from'../images/loc.png';

function Footer() {
  return (
/* Footer */
<footer className="footer">
<div className="footer-content">
  <nav className="footer-links">
    <Link to="/commandes">Commandes |</Link>
    <Link to="/ComptesEmployes"> Comptes Employés |</Link>
    <Link to="#"> Statistiques |</Link>
    <Link to="/Reclamations"> Réclamations |</Link>
    <Link to="/MenuGestion"> Gestion du Menu</Link>
  </nav>
  <div className="footer-info">
    <h1>Zeduc SPACE <img src={backgroundicon} /></h1>
    <p>All Rights Reserved. Copyright © Jubilant FoodWorks Ltd.</p>
  </div>
  <div className="footer-contact">
    <p><img src={backgroundtel} alt="telephone"/>+237 654 77 88 99 </p>
    <p>| <img src={backgroundloc} alt="localisation"/>Yansoki, Terrasse</p>
  </div>
</div>
</footer>
 );
}

export default Footer;