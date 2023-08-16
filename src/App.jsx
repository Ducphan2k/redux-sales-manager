import React from 'react'
import './App.css';
import Cart from './components/Cart';
import ProductsList from './components/ProductList';

function App() {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <hr />
      <ProductsList />
      <hr />
      <Cart />
    </div>
  )
}

export default App;
