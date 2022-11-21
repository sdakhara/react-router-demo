import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'; 
import Contact from './components/Contact';

function App() {
  return (
    <>
      <nav>this is nav bar</nav>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
