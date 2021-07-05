import React from 'react'
import './App.css';
import Shoplist from './components/shoplist';

function App() {
  return (
    <div className="App">
     <div className="header">
      <h1>ShopList</h1>
        <button>Add Shop</button>
      </div>
      <div>
        <Shoplist />
      </div>
    </div>
  );
}

export default App;
