/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header1';
import Footer from './components/Footer';
import Commandes from './commandes';
import Reclamations from './Reclamations';
import MenuGestion from './MenuGestion';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/commandes" element={<Commandes />} />
        <Route path="/reclamations" element={<Reclamations />} />
        <Route path="/MenuGestion" element={<MenuGestion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header1';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'; // Import du Dashboard
import Commandes from './commandes';
import ComplaintsManagement from './Reclamations';
import MenuManagement from './MenuGestion';
import EmployeesManagement from './ComptesEmployes';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/commandes" element={<Commandes />} />
        <Route path="/ComptesEmployes" element={<EmployeesManagement />} />
        <Route path="/MenuGestion" element={<MenuManagement />} />
        
        <Route path="/reclamations" element={<ComplaintsManagement />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
