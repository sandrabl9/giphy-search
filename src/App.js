import { useState, useEffect } from 'react';
import getGifs from './services/getGifs';

import './App.css';
import ListOfGifs from './components/ListOfGifs';





function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: 'panda' }).then(gifs => setGifs(gifs))
  }, []);


  


  return (
    <div className="App">
      <ListOfGifs gifs={gifs} />
      

     
    </div>
  );
}

export default App;
