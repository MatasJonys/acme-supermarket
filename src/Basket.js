export default class Basket {
  constructor(rules) {
    this.pricingRules = rules;
    this.insideBasket = [];
  }

  add(item) {
    this.insideBasket.push(item);
  }

  total() {
    let totalPrice = 0;

    Object.keys(this.pricingRules).forEach((key) => {
      let count = this.insideBasket.filter((value) => value === key).length;
      const buyingInBulk = count >= this.pricingRules[key].bulkCount;


      // If buy 1 get x free applies to this item, find out how many items we will charge for
      if (this.pricingRules[key].gratis) {
        count -= parseInt(count / this.pricingRules[key].gratis);
      }

      // Choose the right price
      if (buyingInBulk) {
        totalPrice += (count * this.pricingRules[key].bulkPrice);
      } else {
        totalPrice += (count * this.pricingRules[key].price);
      }

    });
    return totalPrice;
  }
};