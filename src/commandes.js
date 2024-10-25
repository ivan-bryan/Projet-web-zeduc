import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import OrderList from './components/OrderList';
import './commandes.css';

const Gestion = () => {
  return (
    <div className="Gestion">
      <div className="content">
        <h2>Gestion des Commandes</h2><br></br>

        {/* En attente de validation */}
        <section className="orders">
          <h3>En attente de validation...</h3>
          <table>
            <thead>
              <tr>
                <th>Plats</th>
                <th>Heures</th>
                <th>Téléphone</th>
                <th>Destination</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>xxx</td>
                <td>xx</td>
                <td>xxxxxxxxx</td>
                <td>xxxxxxxxx</td>
                <td>À la livraison</td>
                <td>
                  <button className="validate" >Valider</button>
                  <button className="cancel" >Annuler</button>
                 
                </td>
              </tr>
            </tbody>
          </table>
          <button className="voir-plus">Voir plus</button>
        </section>

        {/* En cours de traitement */}
        <section className="orders">
          <h3>En cours de traitement</h3>
          <table>
            <thead>
              <tr>
                <th>Plats</th>
                <th>Heures</th>
                <th>Téléphone</th>
                <th>Destination</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>xxxx</td>
                <td>xx</td>
                <td>xxxxxxxxx</td>
                <td>xxxxxxxxx</td>
                <td>Payé</td>
                <td>
                  <button className="finish">Terminer</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="voir-plus">Voir plus</button>
        </section>
      </div>

      
    </div>
  );
}

export default Gestion;
