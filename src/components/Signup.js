import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPassword2, setCurrentPassword2] = useState("");

  const navigate = useNavigate();

  const signupHandler = (event) => {
    event.preventDefault();

    if (currentPassword === currentPassword2) {
      axios
        .post(`/api/users/register`, {
          username: currentUsername,
          password: currentPassword,
        })
        .then(
          (response) => {
            console.log(response);
            navigate("/");
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      alert("Passwords doesn't match!");
    }

    axios
      .post(`/api/users/signup`, {
        username: currentUsername,
        password: currentPassword,
      })
      .then(
        (response) => {
          console.log(response);
          navigate("/");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <Form
      style={{ width: "80%", maxWidth: "32rem", margin: "auto" }}
      onSubmit={signupHandler}
    >
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
      <Form.Group className="mb-3" controlId="confirm-password">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setCurrentPassword2(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
