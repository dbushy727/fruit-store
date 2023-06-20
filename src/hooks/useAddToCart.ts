import { useContext } from "react";

import { AppContext } from "../store";
import { AppState, CartItem, Fruit } from "../types";

const useAddToCart = () => {
  const { appState, setAppState } = useContext(AppContext);

  function addNewItemToCart(fruit: Fruit) {
    const {
      cart: { items },
    } = appState;

    const newItem: CartItem = {
      fruit,
      quantity: 1,
    };

    return setAppState((prevState: AppState) => ({
      ...prevState,
      cart: {
        items: [...items, newItem],
      },
    }));
  }

  function incrementFruitQuantity(fruit: Fruit, cartItemIndex: number) {
    const {
      cart: { items },
    } = appState;
    items.splice(cartItemIndex, 1, {
      fruit,
      quantity: items[cartItemIndex].quantity + 1,
    });

    return setAppState((prevState: AppState) => ({
      ...prevState,
      cart: { items },
    }));
  }

  function addToCart(fruit: Fruit) {
    const {
      cart: { items },
    } = appState;

    const cartItemIndex = items.findIndex(
      (item: CartItem) => item.fruit.name === fruit.name
    );

    if (cartItemIndex === -1) {
      return addNewItemToCart(fruit);
    }

    return incrementFruitQuantity(fruit, cartItemIndex);
  }

  return {
    addToCart,
  };
};

export default useAddToCart;
