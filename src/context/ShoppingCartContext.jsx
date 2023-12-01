import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[Cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
