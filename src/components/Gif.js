import React from 'react';
import './Gif.css';



const Gif = ({title, id, url}) => {
 return (
    <a href={`#${id}`} className='card' >
    <p>{title}</p>
    <img src={url} alt={id}/> 
    </a>
 )

};

export default Gif;