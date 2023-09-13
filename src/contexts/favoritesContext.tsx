import React, { createContext, useState, useContext, ReactNode } from "react";

export interface FavoritesContextType {
  favItems: FavoriteItem[];
  addToFav: (item: FavoriteItem) => void;
  removeItem: (itemId: string) => void;
}

interface FavoriteItem {
  id: string;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favItems, setFavItems] = useState<FavoriteItem[]>([]);

  const addToFav = (item: FavoriteItem) => {
    setFavItems([...favItems, item]);
  };

  const removeItem = (itemId: string) => {
    const updatedCart = favItems.filter((item) => item.id !== itemId);
    setFavItems(updatedCart);
  };

  return (
    <FavoritesContext.Provider value={{ favItems, addToFav, removeItem }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFav = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default FavoritesContext;
