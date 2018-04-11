import React, { Component } from 'react';

class ProductItem extends Component {

  static defaultProps = {
    productData: {}
  }
  
  state = {
    quantity: "",
    disabled: false,
  }

  handleChange = (event) => {
    const quantity = event.target.value;
    if(quantity > this.props.productData.available){
      this.setState({disabled: true});
    }
    this.setState({quantity: event.target.value});
  }

  maybeRenderError = () => {
    if(this.state.disabled) {
      return(
        <p className="error-message">
          Sorry, we only have {this.props.productData.available} in stock
        </p>
      );
    }
  }

  render() { 
    return (
      <div>
        <h2 className="product-title">Product Name</h2>
        <img className="product-image" />
        <form className="product-form">
          <input 
            className="quantity-input" 
            value={this.state.quantity} 
            onChange={this.handleChange} />
            <button 
            className="add-to-cart"
            disabled={this.state.disabled}>
              Add To Cart
            </button>
            {this.maybeRenderError()}
        </form>
      </div>
    )
  }
}
 
export default ProductItem;