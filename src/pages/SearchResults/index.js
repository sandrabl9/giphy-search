import React from 'react';
import ListOfGifs from '../../components/ListOfGifts/ListOfGifs';
import useGifs from '../../hooks/useGifs';

const SearchResults = ({ params }) =>{

    const { keyword } = params; 
    const { loading, gifs } = useGifs({ keyword });
    

    return(
        <div>
        {loading ? <p>Loading...</p>
        :  <ListOfGifs gifs={gifs} />
      
        }
      </div>
    );
};

export default SearchResults;