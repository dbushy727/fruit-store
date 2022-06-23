import { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { AppContext } from "../store";
import { identify, trackEvent } from "../amplitude";
import users from "../users.json";
import { AppState, User } from "../types";

export default function LoginForm() {
  const { setAppState } = useContext(AppContext);

  function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // @ts-ignore
    const userId: string = event.target.elements.userId.value;

    const user = users.find((user: User) => user.id === userId);

    if (!user) {
      return;
    }

    setAppState((prevState: AppState) => ({ ...prevState, user }));
    trackEvent(user, "Logged In");
    identify(user);
  }

  return (
    <Card className="p-3">
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="userId">
          <Form.Label>Login as user</Form.Label>
          <Form.Select aria-label="Select User">
            {users.map((user: User) => (
              <option key={user.id} value={user.id}>
                {user.email}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Card>
  );
}
