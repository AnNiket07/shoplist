import React from 'react'
import './App.css';
import Shops from './components/Shops';
import Shoplist from './components/shoplist';

function App() {
  return (
    <div className="App">
     <div className="header">
      <h1>ShopList</h1>
        <Shops />
      </div>
      <div>
        <Shoplist />
      </div>
    </div>
  );
}

export default App;
