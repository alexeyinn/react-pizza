import React from "react";
import "./styles.css";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("https://r4eei.csb.app/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }); //Если возникунут проблемы с получением данных из БД, добавить в конце ,[]

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}
