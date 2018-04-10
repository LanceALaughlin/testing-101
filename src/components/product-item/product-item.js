import React, { Component } from "react";

class ProductItem extends Component {
  state = { value: "", disabled: false };

  static defaultProps = { productData: {} }

  handleChange = (event) => {
    let disabled = false;
    if(event.target.value > this.props.productData.available){
      disabled = true;
    }
    this.setState({value: event.target.value, disabled})
  }

  maybeRenderError = () => {
    if(this.state.disabled){
      return (
        <p className="error-message">
          Sorry, we only have {this.props.productData.available} in stock
        </p>
      );
    }
  }

  render() {
    return <div>
        <h2 className="product-title">Product</h2>
        <input 
          value={ this.state.value }
          className="quantity-input"
          onChange={this.handleChange} />
        <button className="add-to-cart" disabled={this.state.disabled}>
          Add To Cart
        </button>
        {this.maybeRenderError()}
      </div>;
  }
}

export default ProductItem;
