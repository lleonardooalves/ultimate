import React, { createContext, useState, useContext, ReactNode } from "react";

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  addQuantityToCart: (itemId: string, quantity: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (itemId: string) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    );
    setCartItems(updatedCart.filter((item) => item.quantity > 0));
  };

  const increaseQuantity = (itemId: string) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const addQuantityToCart = (itemId: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        increaseQuantity,
        addQuantityToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext;
