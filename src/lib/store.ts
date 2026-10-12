'use client';

import { create } from 'zustand';

export type ViewId = 'home' | 'news' | 'atlas' | 'path' | 'resources' | 'about' | 'contact';

export const VIEWS: Array<{ id: ViewId; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'news', label: 'Current Affairs' },
  { id: 'atlas', label: 'Geo Atlas' },
  { id: 'path', label: 'Courses' },
  { id: 'resources', label: 'Resources' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function parseHash(): ViewId {
  if (typeof window === 'undefined') return 'home';
  const raw = window.location.hash.replace(/^#\/?/, '');
  const found = VIEWS.find((v) => v.id === raw);
  return found ? found.id : 'home';
}

interface CartState {
  items: string[];
  open: boolean;
}

interface AppStore {
  view: ViewId;
  setView: (v: ViewId) => void;
  cart: CartState;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  setCartOpen: (open: boolean) => void;
}

export const useApp = create<AppStore>((set, get) => ({
  view: 'home',
  setView: (v) => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', v === 'home' ? '#' : `#/${v}`);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    set({ view: v });
  },
  cart: { items: [], open: false },
  addToCart: (id) => {
    const { cart } = get();
    if (!cart.items.includes(id)) {
      set({ cart: { ...cart, items: [...cart.items, id] } });
    }
  },
  removeFromCart: (id) => {
    const { cart } = get();
    set({ cart: { ...cart, items: cart.items.filter((x) => x !== id) } });
  },
  setCartOpen: (open) => {
    const { cart } = get();
    set({ cart: { ...cart, open } });
  },
}));

/** Sync store view with URL hash so refresh and back/forward behave. */
export function initHashRouting() {
  if (typeof window === 'undefined') return () => {};
  const apply = () => useApp.getState().setView(parseHash());
  apply();
  window.addEventListener('hashchange', apply);
  return () => window.removeEventListener('hashchange', apply);
}
