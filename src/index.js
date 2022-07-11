import React from 'react';
import ReactDOM from 'react-dom/client';
import Achievements from './components/Achievements';
import Brands from './components/Brands';
import Challengign from './components/Challenging';
import Header from './components/Header';
import Nav from './components/Nav';
import RecentProject from './components/RecentProject';
import Reviews from './components/Reviews';
import WhatWeCan from './components/WhatWeCan';
import GlobalStyles from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <GlobalStyles />
    <Nav />
    <Header />
    <WhatWeCan />
    <Challengign />
    <Reviews />
    <Brands />
    <RecentProject />
    <Achievements />
  </React.Fragment>
);
