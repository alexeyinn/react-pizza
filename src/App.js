import React from "react";
import "./styles.css";
import { Header } from "./components";
import { Home } from "./pages";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} />
      </div>
    </div>
  );
}
