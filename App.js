import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import ErrorBoundary from './ErrorBoundary';
function App() {
  return (
    <>
   
   <Navbar />
   <ErrorBoundary>
   <Routes>
   
    <Route path='/' element={<Home />}></Route>
    
   </Routes>
   </ErrorBoundary>
  <Footer />
   
    
    </>
  );
}

export default App;
