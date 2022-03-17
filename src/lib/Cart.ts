interface CartItem {
  product: {
    title: string;
    price: number;
  };
  quantity: number;
}

export default class Cart {
  items = [];

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }
  add(item: CartItem) {
    this.items.push(item);
  }
}
