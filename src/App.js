import React, { Component } from 'react'
import Header from './components/Header'
import SkillCalc from './components/SkillCalc'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.sass'

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <SkillCalc />
        <Footer />
      </main>
    );
  }
}

export default App;
