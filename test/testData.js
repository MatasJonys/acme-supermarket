/* global it, describe */

import * as assert from 'assert';
import Basket from '../src/Basket';

//-------------------------------------------------
describe('Basket ', () => {
  const pricingRules = {
    FR1: {
      name: 'Fruit tea',
      gratis: 2,
      price: 3.11,
    },
    SR1: {
      name: 'Strawberries',
      price: 5.00,
      bulkCount: 3,
      bulkPrice: 4.50,
    },
    CF1: {
      name: 'Coffe',
      price: 11.23,
    }
  };

  it('first test case ', () => {
    const basketContent = ['FR1', 'SR1', 'FR1', 'CF1'];
    const basket = new Basket(pricingRules);
    basketContent.forEach((item) => basket.add(item));
    assert.equal(basket.total(), 19.34);
  });

  it('second test case ', () => {
    const basketContent = ['FR1', 'FR1'];
    const basket = new Basket(pricingRules);
    basketContent.forEach((item) => basket.add(item));
    assert.equal(basket.total(), 3.11);
  });

  it('third test case ', () => {
    const basketContent = ['SR1', 'SR1', 'FR1', 'SR1'];
    const basket = new Basket(pricingRules);
    basketContent.forEach((item) => basket.add(item));
    assert.equal(basket.total(), 16.61);
  });
});
