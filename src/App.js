import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Login from './pages/Login';
import Home from './pages/Home';
import Community from './pages/Community';
//import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path ='/Login' element={<Login />}/>
      <Route path ='/Community' element={<Community/>} />
   
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
