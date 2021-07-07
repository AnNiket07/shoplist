import React from 'react'
import './App.css';
import DisplayShops from './components/DisplayShops';
import Shops from './components/Shops';

function App() {
  return (
    <div className="App">
     <div className="header">
        <Shops />
        <DisplayShops />
      </div>
    </div>
  );
}

export default App;
