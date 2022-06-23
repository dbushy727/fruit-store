import React from "react";
import { AppState, Store } from "./types";

export const AppContext = React.createContext<Store>({
  appState: {
    user: null,
    cart: {
      items: [],
    },
    completedCheckout: false,
  },
  // @ts-ignore
  setAppState: (appState: AppState) => {},
});
