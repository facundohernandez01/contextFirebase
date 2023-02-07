import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./itemDetail.module.css";
import db from "../../db/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";

const ItemDetail = ({ deleteProduct }) => {
  const { id } = useParams();
  const [ItemList, setItem] = useState({});

  const getItem = async (id) => {
    const itemDocRef = doc(db, "ItemList", id);
    const itemDoc = await getDoc(itemDocRef);
    if (itemDoc.exists()) {
      setItem(itemDoc.data());
    } else {
      console.log("El ítem no existe");
    }
  };

  useEffect(() => {
    getItem(id);
  }, []);

  return (
    <div className={styles.container}>
      <h2>{ItemList.title}</h2>
      <p>{ItemList.price} $</p>
    </div>
  );
};

export default ItemDetail;
