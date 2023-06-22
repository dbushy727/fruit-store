import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import FruitStore from "./FruitStore";
import LoginForm from "./LoginForm";
import { AppContext } from "../store";
import { AppState, User } from "../types";
import { trackEvent } from "../amplitude";

function App() {
  const [appState, setAppState] = useState<AppState>({
    user: null,
    cart: {
      items: [],
    },
    completedCheckout: false,
  });

  const isLoggedIn = !!appState.user;

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <Container className="p-3">
        <Col lg={{ span: 4, offset: 4 }}>
          <Container className="p-3 mb-3 bg-light rounded-3 text-center">
            <h2
              className="header"
              onClick={() => {
                trackEvent(appState.user as User, "Clicked Header");
              }}
            >
              🥝🍉 Fruit Store 🍌🍓
            </h2>
            <p>A place to buy fruit</p>
          </Container>
          {isLoggedIn ? <FruitStore /> : <LoginForm />}
        </Col>
      </Container>
    </AppContext.Provider>
  );
}

export default App;
