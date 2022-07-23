import create from 'zustand';

const useStore = create((set) => ({
  user: '',
  cartCount: 0,
  login: () => set((state) => ({ user: 'jack' })),
  logout: () => set((state) => ({ user: '' })),
  addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));

export const useLogin = () => useStore((state) => state.login);
export const useLogout = () => useStore((state) => state.logout);
export const useAddToCart = () => useStore((state) => state.addToCart);
export const useCartCount = () => useStore((state) => state.cartCount);
export const useUser = () => useStore((state) => state.user);
