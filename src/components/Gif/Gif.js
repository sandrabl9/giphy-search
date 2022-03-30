import React from 'react';
import './Gif.css';



const Gif = ({title, id, url}) => {
 return (
    <div className='card' >
    <p>{title}</p>
    <img src={url} alt={id}/> 
    </div>
 )

};

export default Gif;