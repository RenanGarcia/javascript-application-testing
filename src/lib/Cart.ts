import find from 'lodash/find';
import remove from 'lodash/remove';
import matches from 'lodash/matches';
import Dinero from 'dinero.js';

const Money = Dinero;

Money.defaultCurrency = 'BRL';
Money.defaultPrecision = 2;

interface CartProduct {
  title: string;
  price: number;
}
interface CartItem {
  product: CartProduct;
  quantity: number;
}

export default class Cart {
  items = [];

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc.add(Money({ amount: item.quantity * item.product.price }));
    }, Money({ amount: 0 }));
  }

  add(item: CartItem) {
    const itemToFind = { product: item.product };
    if (find(this.items, itemToFind)) {
      remove(this.items, matches(itemToFind));
    }
    this.items.push(item);
  }

  remove(product: CartProduct) {
    remove(this.items, matches({ product }));
  }

  summary() {
    const total = this.getTotal().getAmount();
    const items = this.items;
    return { total, items };
  }

  checkout() {
    const { total, items } = this.summary();
    this.items = [];
    return { total, items };
  }
}
