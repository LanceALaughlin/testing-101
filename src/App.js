import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductItem from './components/product-item/product-item';
import Cart from './components/cart/cart';

class App extends Component {

  state = {
    cart: [],
    productData: {},
  }

  componentDidMount = () => {
    // FAKE QUERY/API call here
    this.setState({
      productData: {
        name: "Fresh Prince: Season 2",
        price: 10,
        available: 4
      }
    });
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
        <ProductItem productData={this.props.productData} onAdd={this.handleAddToCart} />
        <Cart cartItems={this.state.cart}/>
      </div>
    );
  }
}

export default App;
