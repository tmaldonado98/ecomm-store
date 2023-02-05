import './App.css';
import {Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import MainAbout from './MainAbout';
import FooterSection from './Footer';
import { Routes } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div >
      <nav>
        <Typography variant='h1'>David Maldonado Art</Typography>
                  <div>
                      <ul id='nav-items'>
                          <Link to='/'>
                              <Typography variant='li'>home</Typography>
                          </Link>
                          <Link to='/products'>
                              <Typography variant='li'>products</Typography>
                          </Link>                              
                          <Link to='/about'>
                            <Typography variant='li'>about</Typography>
                          </Link>
                          <Link to='/contact'>
                            <Typography variant='li'>contact</Typography>
                          </Link>                      
                      </ul>
                      <button>
                          <Typography variant='span'>cart </Typography><Typography variant='span'>0</Typography>
                      </button>
                  </div>
          <Routes>
              <Route path='/Products' element={<Products />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Contact' element={<Contact />}/>
          </Routes>                                
      </nav>
      <header id="containerHeader">
        <Header />
      </header>
      <section id='mainAbout'>
        <MainAbout />
      </section>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}

export default App;
