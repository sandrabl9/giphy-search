import React from 'react';
import Gif from "../Gif/Gif";

import "./ListOfGifs.css";


const ListOfGifs = ({ gifs }) => {

   

    return (
      <div className="card">
        
        {gifs.map(({id, title, url}) => (
          <Gif 
          id={id} 
          key={id} 
          title={title} 
          url={url} />
        ))}
      </div> 

        
      
    );
  };
  
  

export default ListOfGifs;
