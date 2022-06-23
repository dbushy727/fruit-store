import { useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { AppContext } from "../store";
import { calculateTotal } from "../util";

export default function Cart() {
  const {
    appState: { cart },
  } = useContext(AppContext);

  const total = calculateTotal(cart);

  return (
    <Card className="p-3">
      <Card.Title>Cart</Card.Title>
      <Card.Body>
        {cart.items.length === 0 && (
          <p className="text-center">Cart is empty. Add some fruit! 🍌🍓🥝</p>
        )}
        <ListGroup variant="flush">
          {cart.items.map((cartItem) => (
            <div
              className="d-flex justify-content-between"
              key={cartItem.fruit.name}
            >
              <div>
                ({cartItem.quantity}) {cartItem.fruit.name}
              </div>
              <p>${(cartItem.quantity * cartItem.fruit.price).toFixed(2)}</p>
            </div>
          ))}
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-center">
        <strong>Total: ${total.toFixed(2)}</strong>
      </Card.Footer>
    </Card>
  );
}
