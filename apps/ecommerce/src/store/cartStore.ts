import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: () => number;
  itemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (item, qty = 1) => {
        set((state) => {
          const key = `${item.productId}-${item.size ?? ""}`;
          const existing = state.items.find((i) => `${i.productId}-${i.size ?? ""}` === key);
          if (existing) {
            return {
              items: state.items.map((i) =>
                `${i.productId}-${i.size ?? ""}` === key ? { ...i, quantity: i.quantity + qty } : i,
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, { ...item, quantity: qty }], isOpen: true };
        });
      },
      removeItem: (productId, size) =>
        set((state) => ({
          items: state.items.filter((i) => !(i.productId === productId && i.size === size)),
        })),
      updateQuantity: (productId, quantity, size) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId && i.size === size ? { ...i, quantity: Math.max(1, quantity) } : i,
          ),
        })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: "forma-cart",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
