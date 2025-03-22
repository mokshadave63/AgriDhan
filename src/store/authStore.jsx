import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null, // Stores logged-in user info
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
