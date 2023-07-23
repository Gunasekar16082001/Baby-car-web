import React from 'react';
import './index.css';
import TopNav from './components/TopNav';
import Banner from './components/Banner';
import Solve from './components/Solve';
import LikeMe from './components/LikeMe';
import Vconnect from './components/Vconnect';
import Med from './components/Med';
import Video from './components/Vidio';
import Book from './components/Book';
import Form from './components/Form';


function App() {
  return (
    <div className="app">
      <TopNav />
      <Banner />
      <Solve />
      <LikeMe />
      <Med />
      <Vconnect />
      <Video />
   <Book />
   <Form />
    </div>
  );
}

export default App;
