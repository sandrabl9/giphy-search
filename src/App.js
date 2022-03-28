
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";


function App() {
  

  return (
    <div className='App'>
      <Link to='/gif/hola'> Gif hola</Link>
      <Link to='/gif/rick'> Gif rick</Link>
      <Link to='/gif/sun'> Gif sun</Link>
      <Link to='/gif/peru'> Gif peru</Link>
      
      <section className='App-content'>
        <Route path='/gif/:keyword' 
        component={ ListOfGifs } />
      </section>
    </div>
  );
}

export default App;
