import React, { createContext, useContext, useState, useEffect } from 'react';
import { formatRupiah } from '../data/menuData';

export interface OrderItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image?: string;
  portion?: string;
}

interface OrderContextType {
  items: OrderItem[];
  addToOrder: (item: { id: string; name: string; category: string; price: number; image?: string; portion?: string }, quantity?: number) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromOrder: (id: string) => void;
  clearOrder: () => void;
  getItemQuantity: (id: string) => number;
  totalItems: number;
  totalPrice: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<OrderItem[]>(() => {
    try {
      const saved = localStorage.getItem('nirwana_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('nirwana_cart', JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addToOrder = (
    item: { id: string; name: string; category: string; price: number; image?: string; portion?: string },
    quantity: number = 1
  ) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter((i): i is OrderItem => i !== null)
    );
  };

  const removeFromOrder = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearOrder = () => {
    setItems([]);
  };

  const getItemQuantity = (id: string) => {
    const item = items.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <OrderContext.Provider
      value={{
        items,
        addToOrder,
        updateQuantity,
        removeFromOrder,
        clearOrder,
        getItemQuantity,
        totalItems,
        totalPrice,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
