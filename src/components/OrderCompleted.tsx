import { useContext, useMemo } from "react";
import { Alert, Button, Card, ListGroup, Row } from "react-bootstrap";
import { AppContext } from "../store";
import { CartItem } from "../types";
import { calculateTotal } from "../util";

export default function OrderCompleted() {
  const {
    appState: { cart },
    setAppState,
  } = useContext(AppContext);

  const total = useMemo(() => calculateTotal(cart), [cart]);

  function reset() {
    setAppState((prevState) => ({
      ...prevState,
      cart: {
        items: [],
      },
      completedCheckout: false,
    }));
  }

  return (
    <>
      <Row>
        <img
          src="https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif"
          alt="borat great success"
          className="mb-3"
          style={{ padding: 0 }}
        />
        <Card className="p-3 mb-3">
          <Card.Title>
            <h5 className="text-center">Order Completed!</h5>
          </Card.Title>
          <Card.Body>
            <Alert variant="success">
              <strong>Total: ${total.toFixed(2)}</strong>
            </Alert>
            <ListGroup>
              {cart.items.map((cartItem: CartItem) => (
                <ListGroup.Item
                  className="d-flex justify-content-between align-items-start"
                  key={cartItem.fruit.name}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      {cartItem.quantity} x {cartItem.fruit.name}
                    </div>
                  </div>
                  <strong>
                    ${(cartItem.quantity * cartItem.fruit.price).toFixed(2)}
                  </strong>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Button variant="primary" size="lg" onClick={reset}>
          🥝🍉 Buy More Fruit! 🍓🍌
        </Button>
      </Row>
    </>
  );
}
