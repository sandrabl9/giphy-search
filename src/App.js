
import './App.css';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home/index';
import logo from './logo2.png';
import { Link, Route } from "wouter";


function App() {
  

  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/home'>
          <img className='logo' alt='sandra-logo' src={logo} />
        </Link>
        <Route 
        component={Home}
        path='/home' />
        
        <Route path='/search/:keyword' 
        component={ SearchResults } />
      </section>
    </div>
  );
}

export default App;
