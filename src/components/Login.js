import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const loginHandler = () => {
    var data = {
      username: currentUsername,
      password: currentPassword,
    };

    var url = `http://localhost:4000/api/users/login`;
    fetch(url, {
      // Adding method type
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Origin": "*",
      },
      mode: "cors",
      // Adding body or contents to send
      body: JSON.stringify(data),

      // Adding headers to the request
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json.user.username));
  };

  return (
    <Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          onChange={(e) => {
            setCurrentUsername(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setCurrentPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
