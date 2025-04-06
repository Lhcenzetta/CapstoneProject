import Header from './compenents/Header';
import Main from './compenents/Main';
import Nav from './compenents/Nav';
import Footer from './compenents/Footer';
import './App.css';
function App() {
  return (
    <>
    <div className='Header' >
    <Header/>
    <Nav/>
    </div>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
