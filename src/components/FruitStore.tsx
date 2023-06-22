import { useContext } from "react";
import { Button, Container, Row } from "react-bootstrap";
import Cart from "./Cart";
import FruitMenu from "./FruitMenu";
import OrderCompleted from "./OrderCompleted";
import { AppContext } from "../store";
import { AppState, User } from "../types";
import { trackEvent } from "../amplitude";
import { calculateTotal } from "../util";

export default function FruitStore() {
  const {
    appState: { cart, completedCheckout, user },
    setAppState,
  } = useContext(AppContext);

  function checkout() {
    setAppState((prevState: AppState) => ({
      ...prevState,
      completedCheckout: true,
    }));

    trackEvent(user as User, "Checkout", {
      total: calculateTotal(cart),
      items: cart.items.map((item) => item.fruit.name),
      itemCount: cart.items.length,
    });
  }

  return (
    <Container>
      {completedCheckout ? (
        <OrderCompleted />
      ) : (
        <>
          <Row className="mb-3">
            <FruitMenu />
          </Row>
          <Row className="mb-3">
            <Cart />
          </Row>
          <Row>
            <Button
              variant="primary"
              size="lg"
              onClick={checkout}
              disabled={cart.items.length === 0}
            >
              🥝 Checkout 💰
            </Button>
          </Row>
        </>
      )}
    </Container>
  );
}
