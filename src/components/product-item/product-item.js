import React, { Component } from 'react';

class ProductItem extends Component {
  state = {
    quantity: ""
  }

  handleChange = (event) => {
    let disabled = false;
    if(event.target.value > this.props.productData.available) {
      disabled = true;
    }
    this.setState({disabled, quantity: event.target.value})
  }

  maybeRenderError = () => {
    if(this.state.disabled){
      return <p className="error-message">Sorry, we only have {this.props.productData.available} in stock</p>
    }
  }

  render() { 
    return (
      <div>
        <h2 className="product-title">Product</h2>
        <img className="product-image" />
        <form className="product-form">
          <input className="quantity-input" 
            value={this.state.quantity} 
            onChange={this.handleChange} />
          <button className="add-to-cart" disabled={this.state.disabled}>Add To Cart</button>
        </form>
        {this.maybeRenderError()}
      </div>
    )
  }
}
 
export default ProductItem;