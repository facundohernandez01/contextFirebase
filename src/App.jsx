import { useEffect, useState } from "react";
// import Grid from "./Grid";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {CartContext} from '././Context/index';
import React, { useContext } from "react";
import Grid from "./Grid";
import CartWidget from "./CartWidget";

function App() {
  const { cart, addCart, ItemList } = useContext(CartContext);


  return (
    <div>
      <CartWidget/>
      <Grid ItemList={ItemList}/>
    </div>
  );
}

export default App;
