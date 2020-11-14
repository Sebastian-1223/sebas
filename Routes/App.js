import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Pricing from "../Pages/Pricing";
import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import Ayuda from "../Pages/Ayuda";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pricing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/login/registro" component={Registro} />
          <Route exact path="/Ayudamtv" component={Ayuda} />
          <Route
            exact
            path="/login/registro/recuperarcontraseña"
            component={Recuperar}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
