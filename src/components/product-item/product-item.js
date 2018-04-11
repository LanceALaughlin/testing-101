import React, { Component } from "react";

class ProductItem extends Component {
  state = { quantity: "", disabled: false };

  static defaultProps = { productData: {} }

  handleChange = (event) => {
    let disabled = false;
    if(event.target.value > this.props.productData.available){
      disabled = true;
    }
    this.setState({quantity: event.target.value, disabled})
  }

  handleAddToCart = () => {
    const { productData } = this.props;
    const { quantity } = this.state;
    this.props.onAdd({ name: productData.name, quantity, price: productData.price })
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
    return <div className="product-item">
        <h2 className="product-title">{this.props.productData.name}</h2>
        <img src={this.props.productData.image} />
        <input 
          value={ this.state.quantity }
          className="quantity-input"
          onChange={this.handleChange} />
        <button className="add-to-cart" disabled={this.state.disabled} onClick={this.handleAddToCart}>
          Add To Cart
        </button>
        {this.maybeRenderError()}
      </div>;
  }
}

export default ProductItem;
