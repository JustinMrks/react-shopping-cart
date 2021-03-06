import React, { useState, createContext, useEffect } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

export const Shopping = createContext();
export const Cart = createContext();

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <div className="App">
      <Shopping.Provider value={{ products, cart, addItem, removeItem }}>
        <Navigation />

        {/* Routes */}
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </Shopping.Provider>
    </div>
  );
}

export default App;

//   cart.filter((item) => {
//     if (item.id === !id) {
//       return item;
//     }
//   }),
