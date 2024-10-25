import React from 'react';

function OrderList({ orders, updateOrderStatus }) {
  const pendingOrders = orders.filter(order => order.status === 'en attente');
  const processingOrders = orders.filter(order => order.status === 'en cours');

  return (
    <div className="order-list">
      <h2>Gestion des Commandes</h2>

      <section>
        <h3>En attente de validation...</h3>
        {pendingOrders.map(order => (
          <OrderRow key={order.id} order={order} updateOrderStatus={updateOrderStatus} />
        ))}
      </section>

      <section>
        <h3>En cours de traitement...</h3>
        {processingOrders.map(order => (
          <OrderRow key={order.id} order={order} updateOrderStatus={updateOrderStatus} />
        ))}
      </section>
    </div>
  );
}

function OrderRow({ order, updateOrderStatus }) {
  const { plats, heure, telephone, destination, paiement, status, id } = order;

  return (
    <div className="order-row">
      <span>{plats}</span>
      <span>{heure}</span>
      <span>{telephone}</span>
      <span>{destination}</span>
      <span>{paiement}</span>
      <div className="actions">
        {status === 'en attente' && (
          <>
            <button onClick={() => updateOrderStatus(id, 'en cours')}>Valider</button>
            <button className="cancel">Annuler</button>
          </>
        )}
        {status === 'en cours' && (
          <button onClick={() => updateOrderStatus(id, 'terminé')}>Terminer</button>
        )}
      </div>
    </div>
  );
}

export default OrderList;
