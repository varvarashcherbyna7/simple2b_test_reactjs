import React from 'react';
import './App.sass';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import TitleContent from './components/TitleContent/TitleContent';

const App = () => {
  return (
    <div className="containerApp">
      <Header/>
      <TitleContent/>
      <Content/>
    </div>
  );
}

export default App;
