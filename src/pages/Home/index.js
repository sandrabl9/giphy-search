import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

const POPULAR_GIFS = ['beach', 'sun', 'sea', 'park'];

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
           <input onChange={handleChange} type='text' value={keyword} placeholder='Search a git here...' /> 
           <button>Search</button>
            

        </form>
        <h2 className='title'>Popular Gifs</h2>
        
        <ul>
        {
            POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                <Link to={`/search/${popularGif}`}> {popularGif} GIFS 
                </Link>
                </li>
            ))
        }
        </ul>
        </>
        
    );
};

export default Home;