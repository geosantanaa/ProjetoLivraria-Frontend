import React from 'react';

const Sidebar = ({ cartItems }) => {
  return (
    <div className="sidebar">
      <h2>Home page</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{`${item.title} - ${item.author} - R$ ${item.price.toFixed(2)}`}</li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Sidebar;
