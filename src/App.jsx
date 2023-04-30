import React from 'react';
import './Style.scss'
import Board from './components/Board';
import {usestate} from 'react'


const App = () => {
  return (
    <div className='app'>
      <h1>TIC TAC TOE</h1>
      <Board />
    </div>
  );
};

export default App;
