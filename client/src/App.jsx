//importing other components and dependencies
import React, { createContext } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import NoMatchPage from "./NoMatchPage";
import Dashboard from "./components/Admin/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import Women from "./components/MainPage/Women";
import MainPage from "./components/MainPage/MainPage";
import Products from "./components/MainPage/Products";
import WishList from "./components/WishList/WishList";
import ShoppingBag from "./components/Shopping Bag/ShoppingBag";
import LookBook from "./components/LookBooks/LookBook";
import Homepage from "./components/HomePage/Homepage";
import AddProduct from "./components/Admin/AddProduct";
import OrderList from "./components/Admin/OrderList";

export const UserContext = createContext();

function App() {
  return (
    <HashRouter>
      <NavBar />
      <div className="container-fluid">
        <Switch>
          {/* creating route paths for other component */}
          <Route path="/" exact={true} component={Homepage} />
          <Route path="/men" component={MainPage} />
          <Route path="/women" component={Women} />
          <Route path="/lookbook" component={LookBook} />
          <Route path="/shoppingbag" component={ShoppingBag} />
          <Route path="/products/:id" component={Products} />
          <Route path="/wishlist" component={WishList} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addproduct" component={AddProduct} />

          <Route path="/orderlist" component={OrderList} />

          <Route path="*" component={NoMatchPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
