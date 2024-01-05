import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import VendingItem from "./VendingItem";
import vendingList from "./vendingList";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          {vendingList.map((item) => (
            <Route
              key={item.id}
              path={item.path}
              element={<VendingItem item={item} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
