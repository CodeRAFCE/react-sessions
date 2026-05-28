const cartItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: 320,
    quantity: 2,
    isVeg: true,
    imageId: "rng/md/ads/prod/v2_ratndeep-veg-biryani-kolkata.png",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    price: 280,
    quantity: 1,
    isVeg: false,
    imageId: "rng/md/ads/prod/v2_ratndeep-veg-biryani-kolkata.png",
  },
  {
    id: 3,
    name: "Garlic Naan",
    price: 60,
    quantity: 3,
    isVeg: true,
    imageId: null,
  },
];

const isEmpty = true; // toggle to true to see empty state

const CartItem = ({ item }) => (
  <div className="cart-item">
    <div className="cart-item-info">
      <span className={item.isVeg ? "veg-dot" : "nonveg-dot"} />
      <div>
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">₹{item.price}</p>
      </div>
    </div>

    <div className="cart-item-right">
      <div className="cart-qty-control">
        <button className="qty-btn">−</button>
        <span className="qty-value">{item.quantity}</span>
        <button className="qty-btn">+</button>
      </div>
      <p className="cart-item-total">₹{item.price * item.quantity}</p>
      <button className="cart-remove-btn">Remove</button>
    </div>
  </div>
);

const EmptyCart = () => (
  <div className="cart-empty">
    <div className="cart-empty-icon">🛒</div>
    <h2 className="cart-empty-title">Your cart is empty</h2>
    <p className="cart-empty-subtitle">
      Add items from a restaurant to get started
    </p>
    <a href="/" className="cart-browse-btn">
      Browse Restaurants
    </a>
  </div>
);

const Cart = () => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = 49;
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + taxes;

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {isEmpty ? (
        <EmptyCart />
      ) : (
        <div className="cart-layout">
          <div className="cart-items-section">
            <p className="cart-restaurant-name">Spice Garden</p>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="cart-summary-title">Bill Details</h2>
            <div className="cart-summary-row">
              <span>Item Total</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="cart-summary-row">
              <span>GST & Charges</span>
              <span>₹{taxes}</span>
            </div>
            <div className="cart-summary-divider" />
            <div className="cart-summary-row cart-summary-total">
              <span>To Pay</span>
              <span>₹{total}</span>
            </div>
            <button className="cart-checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
