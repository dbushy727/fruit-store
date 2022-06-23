import { useContext } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { trackEvent } from "../amplitude";
import Cart from "./Cart";
import FruitMenu from "./FruitMenu";
import OrderCompleted from "./OrderCompleted";
import { AppContext } from "../store";
import { calculateTotal } from "../util";
import { AppState, User } from "../types";

export default function FruitStore() {
  const {
    appState: { user, cart, completedCheckout },
    setAppState,
  } = useContext(AppContext);

  function checkout() {
    trackEvent(user as User, "Checkout", {
      total: calculateTotal(cart),
      cart,
    });

    setAppState((prevState: AppState) => ({
      ...prevState,
      completedCheckout: true,
    }));
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
