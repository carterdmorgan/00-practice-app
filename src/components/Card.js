import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem'
  }

  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  }

  return (
    <div className="container corgi-card">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placecorgi.com/${randomWidth()}`}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
        <p className="card-text">Description: {props.description}</p>
        <p className="card-text">ID: {props.id}</p>
        <a href="#" className="btn btn-primary">
          Adopt {props.name}
        </a>
      </div>
    </div>
  )
}