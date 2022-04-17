import React, { useReducer, createContext } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Login from "./components/Login/Login";
import Register from "./Register";
import NoMatchPage from "./NoMatchPage";
import Dashboard from "./Dashboard";
import NavBar from "./components/NavBar/NavBar";
import Men from "./Men";
import Women from "./Women";
import ProductsList from "./ProductsList";
import Store from "./Store";
import MainPage from "./components/MainPage/MainPage";
import Order from "./Order";
import { reducer, initialState } from "../src/reducer/UseReducer";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <HashRouter>
        <NavBar />
s
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/men" component={Men} />
            <Route path="/women" component={Women} />
            <Route path="/store" component={Store} />
            <Route path="/order" component={Order} />
            <Route path="/products" component={ProductsList} />
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </div>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
