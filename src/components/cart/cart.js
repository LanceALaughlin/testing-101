import React, { Component } from 'react';

class Cart extends Component {
  state = {}

  static defaultProps = {
    cartItems: [],
  }

  renderCartItems = () => {
    if(this.props.cartItems.length > 0) {
      return this.props.cartItems.map(item => {
        return <div className="cart-item" key={item.name}>
            {item.name} - {item.quantity}
          </div>;
      });
    }else {
      return <p>Your cart is empty</p>
    }
   
  }

  renderCheckoutButton = () => {
    if(this.props.cartItems.length > 0){
      return <button className="checkout-btn">Checkout</button>
    }
  }

  render() { 
    return (
      <div className="cart">
        <div className="cart-items">
          {this.renderCartItems()}
        </div>
        {this.renderCheckoutButton()}
      </div>
      )
  }
}
 
export default Cart;