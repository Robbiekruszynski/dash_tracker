import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Expenses } from "./components/Expenses";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
      </div>
    </div>
  );
}

export default App;
