import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import ProductItem from './product-item';

describe('Product Item', () => {
  const wrapper = shallow(<ProductItem />);

  describe('Child components render', () => {
    it('should render the product title', () => {
      expect(wrapper.find(".product-title").length).toBe(1);
    });
  });

  describe('Product Form', () => {
    let wrapper;
    beforeEach(() => {
      const productData = { name: "Fresh Prince: Season 2", price: 10, available: 6 };
      wrapper = shallow(<ProductItem productData={productData} />);
      wrapper.find(".quantity-input").simulate("change", { target: { value: 10 } });
    });

    it('should disable button when input is more than available', () => {
      expect(wrapper.find('.add-to-cart').prop("disabled")).toBe(true);
    });

    it("should show message when input is more than available", () => {
      expect(wrapper.find('.error-message').text()).toBe("Sorry, we only have 6 in stock");
    });
  });

});