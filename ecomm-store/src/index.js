import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
          <Routes>
              <Route path='/' element={<App />}/>
              <Route path='/Products' element={<Products />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Contact' element={<Contact />}/>
          </Routes>                                

    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

