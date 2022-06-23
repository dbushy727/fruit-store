export interface User {
  id: string;
  email: string;
  plan: string;
}

export interface Fruit {
  name: string;
  tagline: string;
  price: number;
}
export interface CartItem {
  fruit: Fruit;
  quantity: number;
}
export interface Cart {
  items: CartItem[];
}
export interface AppState {
  user: User | null;
  cart: Cart;
  completedCheckout: boolean;
}

export interface Store {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
}
