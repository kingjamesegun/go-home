import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import How from './components/How';
import Lost from './components/Lost';
import Mission from './components/Mission';
import Faqs from './components/Faqs';
import Footer from './components/footer';

class App extends React.Component {
  state = {  }
  render() { 
    return (
      <div>
        <Header/>
        <Lost/>
        <About/>
        <How/>
        <Mission/>
        <Faqs/>
        <Footer/>
      </div>
      );
  }
}
 
export default App;