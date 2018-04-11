import React from 'react';
import { shallow } from 'enzyme';
import ProductItem from './product-item';

const wrapper = shallow(<ProductItem />);
describe('Product Item', () => {

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
    it("should initialize state to empty string");
    it('should update state on input change event');
    it('should disable button on empty field');

    describe('User enters more than available quantity', () => {
      let wrapper;
      beforeEach(() => {
        const productData = { name: "Fresh Prince: Season 2", price: 10, available: 6 };
        wrapper = shallow(<ProductItem productData={productData} />);
      })

      it("should disable button when input is more than available", () => {
        wrapper.find(".quantity-input").simulate("change", { target: { value: "8" } });
        expect(wrapper.find(".add-to-cart").prop("disabled")).toBe(true);
      });

      it("should show message when input is more than available", () => {
        wrapper.find(".quantity-input").simulate("change", { target: { value: "8" } });
        expect(wrapper.find(".error-message").text()).toBe("Sorry, we only have 6 in stock");
      });
    });
  });

});