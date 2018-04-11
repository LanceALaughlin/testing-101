import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Adding item to cart', () => {
  it('should add an item with correct quantity  ', () => {
    const item = { name: "Fresh Prince: Season 2", price: 10, available: 8 };
    const wrapper = mount(<App productData={item} />);
     wrapper.find(".quantity-input").simulate("change", {target: {value: "6"}});
     wrapper.find(".add-to-cart").simulate("click");
     expect(wrapper.find(".cart-item").at(0).text()).toBe("Fresh Prince: Season 2 - 6");
  });
  
});
