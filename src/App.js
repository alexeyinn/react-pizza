import React from "react";
import "./styles.css";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import axios from "axios";

export default function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://r4eei.csb.app/db.json").then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}
