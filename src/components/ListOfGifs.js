import React from 'react';
import Gif from './Gif';

const ListOfGifs = ({ gifs }) => {

    return (
        <div>
        { gifs.map(gif => 
        <Gif
        id={gif.id} 
        key={gif.id} 
        title={gif.title} 
        url={gif.url} 
         />)}
        </div>
    )
};

export default ListOfGifs;