import { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();

// custom hook to easily access the cart context in components
export const useCart = () => {
    return useContext(CartContext);
};

// cartProvider component that wraps the entire application
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

  const addToCart = (dish) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === dish.id);

    if (existingItemIndex !== -1) {
      setCartItems((prevItems) =>
        prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...dish, quantity: 1 }]);
    }
  };

  const removeFromCart = (dish) => {
    const isItemInCart = cartItems.find((Item) => Item.id === dish.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== dish.id));
    } 
    else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === dish.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  }

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
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  // log cartItems whenever their state changes
  /*
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]); */

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      emptyCart,
      cartTotalPrice,
      cartTotalItems, }}
      >
      {children}
    </CartContext.Provider>
  );
};
