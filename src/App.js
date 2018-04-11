import React, { Component } from 'react';
import './App.css';
import ProductItem from './components/product-item/product-item';
import Cart from './components/cart/cart';

class App extends Component {

  state = {
    cart: [],
  }

  handleAddToCart = (item) => {
    const cart = this.state.cart;
    cart.push(item);
    this.setState({ cart });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Secret DVD Store</h1>
        </header>
        <div className="store">
          <ProductItem productData={this.props.productData} onAdd={this.handleAddToCart} />
          <Cart cartItems={this.state.cart}/>
        </div>
      </div>
    );
  }
}

export default App;
