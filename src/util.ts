import { sumBy } from "lodash";
import { Cart } from "./types";

export function calculateTotal(cart: Cart) {
  const { items } = cart;

  return sumBy(items, (item) => item.fruit.price * item.quantity);
}
