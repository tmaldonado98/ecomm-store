// import {React} from "react";
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import App from './App';
import Products from './routes/Products';
import About from './routes/About';
import Contact from './routes/Contact';
import Success from './routes/Success';
import {AnimatePresence, motion} from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<App />}/>
                <Route path='/Products' element={<Products />}/>
                <Route path='/About' element={<About />}/>
                <Route path='/Contact' element={<Contact />}/>
                <Route path='/Success' element={<Success />}/>
            </Routes>   
        </AnimatePresence>                             
    )
}
