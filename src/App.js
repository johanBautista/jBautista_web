import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <i>app start</i>
    </div>
  );
}

export default App;
