import { createContext, useContext, useState, useEffect } from 'react';

// Create a context to hold the state related to the shopping cart
const CartContext = createContext();

// Custom hook to easily access the cart context in components
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component that wraps the entire application
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === dish.id);

    if (existingItemIndex !== -1) {
      // If the dish is already in the cart, update the quantity
      setCartItems((prevItems) =>
        prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the dish is not in the cart, add it with a quantity of 1
      setCartItems((prevItems) => [...prevItems, { ...dish, quantity: 1 }]);
    }
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const cartTotalPrice = () => {
    const totalPrice = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    return totalPrice;
  };

  const cartTotalItems = () => {
    const totalItems = cartItems.reduce((accumulator, item) => {
      return accumulator + item.quantity
    }, 0);
    return totalItems;
  };

  

  useEffect(() => {
    console.log(cartItems); // This will log the updated state after the component re-renders
  }, [cartItems]);

  // You can add more functions for editing, removing items, etc.

  // Provide the cart state and functions through the context
  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      emptyCart,
      cartTotalPrice,
      cartTotalItems, }}
      >
      {children}
    </CartContext.Provider>
  );
};
