import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuMa.css';

const MenuManagement = () => {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: 'Pizza', price: 1200, quantity: 10, isAvailable: true },
        { id: 2, name: 'Burger', price: 800, quantity: 5, isAvailable: true }
    ]);

    const [newMenuItem, setNewMenuItem] = useState({ name: '', price: '', quantity: '', isAvailable: false });
    const [editMenuItemData, setEditMenuItemData] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const adminData = { name: 'Admin Name' }; // Remplacez par vos données réelles

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const addMenuItem = () => {
        const newItem = { 
            id: menuItems.length + 1, 
            name: newMenuItem.name, 
            price: parseFloat(newMenuItem.price), 
            quantity: parseInt(newMenuItem.quantity), 
            isAvailable: newMenuItem.isAvailable
        };
        setMenuItems([...menuItems, newItem]);
        setNewMenuItem({ name: '', price: '', quantity: '', isAvailable: false });
        setShowAddForm(false); // Hide form after adding
    };

    const editMenuItem = (id) => {
        const item = menuItems.find(item => item.id === id);
        setEditMenuItemData(item);
    };

    const saveMenuItem = (id) => {
        const updatedItems = menuItems.map((item) =>
            item.id === id ? { ...item, ...editMenuItemData } : item
        );
        setMenuItems(updatedItems);
        setEditMenuItemData(null);
    };

    const deleteMenuItem = (id) => {
        const updatedItems = menuItems.filter(item => item.id !== id);
        setMenuItems(updatedItems);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editMenuItemData) {
            setEditMenuItemData(prevState => ({ ...prevState, [name]: value }));
        } else {
            setNewMenuItem(prevState => ({ ...prevState, [name]: value }));
        }
    };

    return (
        <div className="admin-page">
            <h2>Gestion du Menu</h2>
            <button onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Annuler' : 'Ajouter un Élément'}
            </button>
            {showAddForm && (
                <div className="menu-add">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={newMenuItem.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Prix"
                        value={newMenuItem.price}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="quantity"
                        placeholder="Quantité"
                        value={newMenuItem.quantity}
                        onChange={handleInputChange}
                    />
                    <label>
                        Disponible:
                        <input
                            type="checkbox"
                            name="isAvailable"
                            checked={newMenuItem.isAvailable}
                            onChange={(e) => setNewMenuItem(prevState => ({ ...prevState, isAvailable: e.target.checked }))}
                        />
                    </label>
                    <button onClick={addMenuItem}>Ajouter un Élément</button>
                </div>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Disponibilité</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price} FCFA</td>
                            <td>{item.quantity}</td>
                            <td>{item.isAvailable ? 'Disponible' : 'Non Disponible'}</td>
                            <td>
                                <button onClick={() => editMenuItem(item.id)}>Modifier</button>
                                <button onClick={() => deleteMenuItem(item.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editMenuItemData && (
                <div className="menu-edit">
                    <h3>Modifier le Plat</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        value={editMenuItemData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Prix"
                        value={editMenuItemData.price}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="quantity"
                        placeholder="Quantité"
                        value={editMenuItemData.quantity}
                        onChange={handleInputChange}
                    />
                    <label>
                        Disponible:
                        <input
                            type="checkbox"
                            name="isAvailable"
                            checked={editMenuItemData.isAvailable}
                            onChange={(e) => setEditMenuItemData(prevState => ({ ...prevState, isAvailable: e.target.checked }))}
                        />
                    </label>
                    <button onClick={() => saveMenuItem(editMenuItemData.id)}>Sauvegarder</button>
                </div>
            )}
        </div>
    );
};

export default MenuManagement;