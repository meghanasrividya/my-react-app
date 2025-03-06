import React from 'react';
import './BusinessCard.css';

function BusinessCard({ contact }) {
  // Use external image service based on email
  const imageUrl = `https://i.pravatar.cc/150?u=${contact.email}`;

  const { name, position, email, phone, website } = contact;
  return (
    <div className="business-card">
      <div className="photo-placeholder">
        <img src={imageUrl} alt={contact.name} className="avatar" />
      </div>
      <div className="contact-info">
        <h2>{name}</h2>
        <p>Position: {position}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
      </div>
    </div>
  );
}

export default BusinessCard;