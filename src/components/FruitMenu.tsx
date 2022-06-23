import { Button, ListGroup } from "react-bootstrap";
import { Fruit } from "../types";
import useAddToCart from "../hooks/useAddToCart";

export default function FruitMenu() {
  const { addToCart } = useAddToCart();
  const fruits: Fruit[] = [
    {
      name: "Bunch O' Bananas 🍌",
      tagline: "🐒: I love 'em",
      price: 2.5,
    },
    {
      name: "Box of Strawberries 🍓",
      tagline: "The Beatles named a song after me",
      price: 4,
    },
    {
      name: "Watermelon 🍉",
      tagline: "Hot take: Most refreshing summertime snack",
      price: 7,
    },
  ];

  return (
    <ListGroup className="p-0">
      {fruits.map((fruit) => (
        <ListGroup.Item
          className="d-flex justify-content-between align-items-center"
          key={fruit.name}
        >
          <div className="ms-2 me-auto align-self-center">
            <div className="fw-bold">{fruit.name}</div>
            {fruit.tagline}
          </div>
          <p className="p-3 m-0 align-items-center">
            <strong>${fruit.price.toFixed(2)}</strong>
          </p>
          <Button onClick={() => addToCart(fruit)}>+</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
