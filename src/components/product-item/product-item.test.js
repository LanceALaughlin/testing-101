import React from 'react';
import renderer from 'react-test-renderer';

describe('Product Item', () => {

  describe('Child components render', () => {
    it('should render the product title');
    it('should render the product image');
    it('should render the purchase form');
  });

  describe('Product Form', () => {
    it("should initialize state to empty string");
    it('should update state on input change event');
    it('should disable button on empty field');
    it('should disable button when input is more than available');
    it("should show message when input is more than available");
  });

});