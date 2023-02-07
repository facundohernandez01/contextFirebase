import styles from "./item.module.css";
import { CartContext } from "../Context"
import { useContext, useState } from "react";


const Item = ({item}) => {
  const {  addCart, eliminaItem } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <h2>{item.title}</h2>
      <p>{item.price} $</p>
      <img src={item.image_url}></img>
      <button onClick={() => eliminaItem(item.id)}>Eliminar</button>
      <button onClick={() => addCart(item.id)}>Add to cart</button>
    </div>
  );



};



export default Item;
