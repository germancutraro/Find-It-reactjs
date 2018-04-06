import React from 'react';
import './Card.css';

const Card = ({image, name, url}) => {
  return(
  <div className="Card">
   <img src={image} alt="" className="artist-image"/>
   <div className="artist-information">
     <h3>{name}</h3>
     <a href={url} className="artist-spotify" target="_blank">Go to Spotify</a>
   </div>
  </div>
  )
};

export default Card;