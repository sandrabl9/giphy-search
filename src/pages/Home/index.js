import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import './style.css';

const POPULAR_GIFS = ['Beach', 'Sun', 'Sea', 'Park'];

const Home = () => {

    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`)
        
        
    }
    const handleChange = (e) => {
        setKeyword(e.target.value);

    }


    return (
        <>
        <form onSubmit={handleSubmit}>
           <input onChange={handleChange} type='text' value={keyword} placeholder='Search a GIF here...' /> 
           <button>Search</button>

        </form>

        <h2 className='title'>Popular Gifs</h2>
       
        
        <ul>
        {
            POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                <Link className='link' to={`/search/${popularGif}`}> {popularGif} Gifs 
                </Link>
                </li>
            ))
        }
        </ul>
        </>
        
    );
};

export default Home;