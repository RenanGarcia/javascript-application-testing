import Cart from './Cart';

describe('Cart', () => {
  let cart;
  const product = {
    title: 'Adidas running',
    price: 35388, // 353.88 | R$ 353,88
  };

  const product2 = {
    title: 'Skate',
    price: 41872, // 418.72 | R$ 418,72
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly created instance', () => {
      expect(cart.getTotal().getAmount()).toEqual(0);
    });

    it('should multiply quantity and price and receive the total amount', () => {
      const item = {
        product,
        quantity: 2, // 70776
      };

      cart.add(item);
      expect(cart.getTotal().getAmount()).toBe(
        item.quantity * item.product.price
      );
    });

    it('should only consider the last reported quantity of a product', () => {
      const items = [
        {
          product,
          quantity: 2,
        },
        {
          product,
          quantity: 1,
        },
      ];

      items.forEach((item) => {
        cart.add(item);
      });

      expect(cart.getTotal().getAmount()).toBe(
        items[1].quantity * product.price
      );
    });

    it('should update total when a product gets included and then removed', () => {
      const items = [
        {
          product,
          quantity: 2,
        },
        {
          product: product2,
          quantity: 1,
        },
      ];

      items.forEach((item) => {
        cart.add(item);
      });

      cart.remove(product);

      expect(cart.getTotal().getAmount()).toEqual(product2.price);
    });
  });
  describe('checkout()', () => {
    it('should return an onbject with the total and the list of items ', () => {
      cart.add({
        product: product,
        quantity: 2,
      });
      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.summary()).toMatchSnapshot();
      expect(cart.getTotal().getAmount()).toBeGreaterThan(0);
    });

    it('should reset the cart when checkout() is called', () => {
      cart.add({
        product: product2,
        quantity: 3,
      });

      cart.checkout();
      expect(cart.getTotal().getAmount()).toEqual(0);
    });
  });
});
