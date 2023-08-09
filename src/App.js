import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/signin/Login';
import Home from './pages/home/Home';
import Community from './pages/community/Community';
//import Navbar from './components/Navbar';
import './App.css';
//import GlobalStyle from './styles/GlobalStyle';


function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>  
      <Route path ='/Login' element={<Login />}/>
      <Route path ='/Community' element={<Community/>} />
    

    </Routes>
    </BrowserRouter>
   
   
  );
}

export default App;
