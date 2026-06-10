import { create } from "zustand";

interface UiState {
  sidebarCollapsed: boolean;
  mobileNavOpen: boolean;
  commandOpen: boolean;
  toggleSidebar: () => void;
  setMobileNavOpen: (open: boolean) => void;
  setCommandOpen: (open: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  sidebarCollapsed: false,
  mobileNavOpen: false,
  commandOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  setCommandOpen: (open) => set({ commandOpen: open }),
}));
