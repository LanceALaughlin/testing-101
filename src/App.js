import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductItem from './components/product-item/product-item';

class App extends Component {
  render() {
    const productData = { name: "Fresh Prince: Season 2", price: 10, available: 6 };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Secret DVD Store</h1>
        </header>
        <ProductItem productData={productData} />
      </div>
    );
  }
}

export default App;
