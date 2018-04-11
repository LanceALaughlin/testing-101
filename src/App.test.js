import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('should add item to cart with correct quantity', () => {
  const productData = { name: "Karate Kid", price: 1, available: 40 };
  const wrapper = mount(<App productData={productData} />)
  wrapper
    .find(".quantity-input")
    .simulate("change", { target: { value: "5" } });
  wrapper.find('.add-to-cart').simulate("click");
  expect(wrapper
      .find(".cart-item")
      .at(0)
      .text()).toBe(`${productData.name} x5`);
  
});