import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Assure-toi d'importer les icônes nécessaires
import './employer.css';
import logo from './images/om.png'; // Remplace par le chemin correct pour ton logo

const EmployeesManagement = ({ adminData }) => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice Johnson', role: 'Manager', email: 'alice@example.com', yearsOfService: 5 },
    { id: 2, name: 'Bob Smith', role: 'Chef', email: 'bob@example.com', yearsOfService: 3 },
    { id: 3, name: 'Carol White', role: 'Waitress', email: 'carol@example.com', yearsOfService: 2 },
    { id: 4, name: 'Dave Brown', role: 'Bartender', email: 'dave@example.com', yearsOfService: 4 },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    email: '',
    yearsOfService: 0,
  });
  const [editEmployeeData, setEditEmployeeData] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // État pour le menu burger
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const addEmployee = () => {
    const newEmp = { id: employees.length + 1, ...newEmployee };
    setEmployees([...employees, newEmp]);
    setNewEmployee({ name: '', role: '', email: '', yearsOfService: 0 });
    setShowAddForm(false);
  };

  const editEmployee = (id) => {
    const employee = employees.find(emp => emp.id === id);
    setEditEmployeeData(employee);
  };

  const saveEmployee = (id) => {
    const updatedEmployees = employees.map((employee) => 
      employee.id === id ? { ...employee, ...editEmployeeData } : employee
    );
    setEmployees(updatedEmployees);
    setEditEmployeeData(null);
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editEmployeeData) {
      setEditEmployeeData(prevState => ({ ...prevState, [name]: value }));
    } else {
      setNewEmployee(prevState => ({ ...prevState, [name]: value }));
    }
  };

  return (
    <div className="admin-page">
      <h1>Gestion des Employés</h1>
      <button className="btn-ajouter-outside" onClick={() => setShowAddForm(!showAddForm)}>
        Ajouter
      </button>
      {showAddForm && (
        <div className="employee-form">
          <h2>Ajouter un Employé</h2>
          <input 
            type="text" 
            name="name" 
            value={newEmployee.name} 
            onChange={handleInputChange}
            placeholder="Nom" 
          />
          <input 
            type="text" 
            name="role" 
            value={newEmployee.role} 
            onChange={handleInputChange}
            placeholder="Rôle" 
          />
          <input 
            type="email" 
            name="email" 
            value={newEmployee.email} 
            onChange={handleInputChange}
            placeholder="Email" 
          />
          <input 
            type="number" 
            name="yearsOfService" 
            value={newEmployee.yearsOfService} 
            onChange={handleInputChange}
            placeholder="Années de Service" 
          />
          <button className="btn-ajouter" onClick={addEmployee}>
            Ajouter
          </button>
        </div>
      )}
      <div className="equipe">
        {employees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="employee-image">
              <img src={logo} alt="Nom" />
            </div>
            <div className="employee-info">
              <div className="employee-name">{employee.name}</div>
              <div className="employee-role">{employee.role}</div>
              <div className="employee-details">
                <p>Email: {employee.email}</p>
                <p>Années de Service: {employee.yearsOfService}</p>
              </div>
            </div>
            <div className="employee-actions">
              <button className="btn-voir-plus" onClick={() => navigate(`/admin/employee/${employee.id}`)}>
                Voir Plus
              </button>
              <div className="employee-action-buttons">
                <button className="btn-modifier" onClick={() => editEmployee(employee.id)}>
                  Modifier
                </button>
                <button className="btn-supprimer" onClick={() => deleteEmployee(employee.id)}>
                  Supprimer
                </button>
              </div>
            </div>
            {editEmployeeData && editEmployeeData.id === employee.id && (
              <div className="employee-edit">
                <input 
                  type="text" 
                  name="name" 
                  value={editEmployeeData.name} 
                  onChange={handleInputChange}
                  placeholder="Nom" 
                />
                <input 
                  type="text" 
                  name="role" 
                  value={editEmployeeData.role} 
                  onChange={handleInputChange}
                  placeholder="Rôle" 
                />
                <input 
                  type="email" 
                  name="email" 
                  value={editEmployeeData.email} 
                  onChange={handleInputChange}
                  placeholder="Email" 
                />
                <input 
                  type="number" 
                  name="yearsOfService" 
                  value={editEmployeeData.yearsOfService} 
                  onChange={handleInputChange}
                  placeholder="Années de Service" 
                />
                <button className="btn-save" onClick={() => saveEmployee(employee.id)}>
                  Enregistrer
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="parametres-avances">Paramètres Avancés</div>
    </div>
  );
};

export default EmployeesManagement;
