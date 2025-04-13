import Header from './compenents/Header';
import About from './compenents/About';
import Nav from './compenents/Nav';
// import Footer from './compenents/Footer';
import { Route,Routes } from 'react-router-dom';
import Home from './compenents/Home'
import Dev from './compenents/Dev';
import Login from './compenents/Login';
// import BookingForm from './compenents/BookingForm';
import Main from './compenents/Main';
import Sinup from './compenents/Sinup';
import './App.css';
function App() {
  return (
    <>
    <div className='Header'>
    <Header/>
    <Nav/>
    </div>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/DevlopedBy" element={<Dev/>} />
        {/* <Route path="/BookingForm" element={<BookingForm />} /> */}
        <Route path="/Main" element={<Main />} />
        <Route path="/Sinup" element={<Sinup/>} />
        </Routes>
    </>
  );
}

export default App;
