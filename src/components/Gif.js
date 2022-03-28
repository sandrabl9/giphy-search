import React from 'react';


const Gif = ({title, id, url}) => {
 return (
    <div >
    <p>{title}</p>
    <img src={url} alt={id}/> 
    </div>
 )

};

export default Gif;