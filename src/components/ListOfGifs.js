import React, { useState, useEffect } from 'react';
import Gif from "./Gif";
import getGifs from '../services/getGifs';
import "./ListOfGifs.css";


const ListOfGifs = ({ params }) => {

    const { keyword } = params;  
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);
  
    useEffect(
      function () {
          setLoading(true);
      
        getGifs({ keyword })
        .then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        });
      },
      [keyword]
    );
  

  
    return (
      <div className="card">
        {loading ? <p>Loading...</p>
        :  <div className="card">
        {gifs.map(({id, title, url}) => (
          <Gif 
          id={id} 
          key={id} 
          title={title} 
          url={url} />
        ))}
      </div> 

        }
      </div>
    );
  };
  
  

export default ListOfGifs;
