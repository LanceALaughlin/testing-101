import React, { Component } from 'react';

class Cart extends Component {
  state = {}

  static defaultProps = {
    cartItems: [],
  }

  renderCartItems = () => {
    return this.props.cartItems.map(item => {
      return <div className="cart-item" key={item.name}>{item.name} - {item.quantity}</div>
    })
  }

  render() { 
    return (
      <div>
        {this.renderCartItems()}
      </div>
      )
  }
}
 
export default Cart;