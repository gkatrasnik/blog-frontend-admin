import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./contexts/AuthContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Blog} />

          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
