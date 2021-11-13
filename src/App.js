import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
        <Container>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Blog />} />
            </Route>

            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route to="/" />
          </Routes>
        </Container>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
