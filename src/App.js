import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import './App.css';
import {Route, Switch} from "react-router-dom";
import Register from "./Register";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component={HomePage} />
        <Route exact path="/registration_page" component={Register} />
        <Route exact path="/login_page" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
