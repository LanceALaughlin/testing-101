import React from 'react';
import { shallow } from 'enzyme';
import ProductItem from './product-item';

describe('Product Item', () => {
  const wrapper = shallow(<ProductItem />);
  describe('Child components render', () => {
      it('should render the product title', () => {
        expect(wrapper.find('.product-title').length).toBe(1);
    });
    it('should render the product image', () => {
      expect(wrapper.find(".product-image").length).toBe(1);
    });
    it('should render the purchase form', () => {
      expect(wrapper.find(".product-form").length).toBe(1);
    });
  });

  describe('Product Form', () => {
    let wrapper;
    let productData;
    beforeEach(() => {
      productData = { name: "Free Willy", price: 17, available: 3 };
      wrapper = shallow(<ProductItem productData={productData} />);
      wrapper
        .find(".quantity-input")
        .simulate("change", { target: { value: "5" } });
      
    })
    it('should disable button when input is more than available', () => {
      expect(wrapper.find('.add-to-cart').prop("disabled")).toBe(true);
    });
    it("should show message when input is more than available", () => {
      expect(wrapper.find('.error-message')
        .text()).toBe(`Sorry, we only have ${productData.available} in stock`);
    });
  });

});