
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Reviews from './pages/Reviews/Reviews';
import Navbar from './pages/Shered/Navbar';

function App() {
  return (
    <div className="App">
   
   <Navbar></Navbar>
   <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      <Route path='/Appointment' element={<Appointment></Appointment>}></Route>
      <Route path='/Reviews' element={<Reviews></Reviews>}></Route>
      <Route path='/Contact Us' element={<ContactUs></ContactUs>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
   </Routes>
    </div>
  );
}

export default App;
