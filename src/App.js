import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageRoutes from './components/PageRoutes';

const App = () => {
  return (
    <Router>
      <Header />
      <PageRoutes />
      <Footer />
    </Router>
  );
};

export default App;
