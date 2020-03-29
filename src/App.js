import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';
import Curriculum from './components/pages/curriculum/Curriculum';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cv" component={Curriculum} />
      </Switch>

      {/* <i>app start</i> */}

      <Footer />
    </div>
  );
}

export default App;
