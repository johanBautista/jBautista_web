import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';
import Curriculum from './components/pages/curriculum/Curriculum';

function App() {
  return (
    <div className="App">
      <Navbar />
      <i>app start</i>
      <Home />
      <Curriculum />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
