import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import GlobalStyles from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <GlobalStyles />
    <Nav />
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
);
