import React, { useState, useContext, useEffect, createContext} from 'react'
import db from "../../db/firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const CartContext = createContext();

function CartProvider({ children }) {

      const [ItemList, setItems] = useState([]);
      const itemsCollectionRef = collection(db, "ItemList");
      const [loading, setLoading] = useState(true);

      const getItems = async () => {
        const querySnapshot = await getDocs(itemsCollectionRef);
        setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      };
    
      useEffect(() => {
        getItems();
      }, []);


    const [cart, setCart] = useState([]);
    const addCart = (id) => {
        const existe = cart.every(item => {
            return item.id !== id
        })
        if(existe){
            const data = ItemList.filter(product => {
                return product.id === id
            })
            setCart([...cart, ...data]);
        }
        else{
            alert("Este producto ya está en el carrito")
        }
    } 
    console.log(cart)

    function getSumaCart() {
        return (Number(cart.length));
    }
    function eliminaItem(id) {
        let newCart = cart.filter((itemInCart) => (itemInCart.id !== id));
        setCart(newCart);
    }

  return (
    <CartContext.Provider value={{cart, ItemList, addCart, getSumaCart, eliminaItem }}>
      {children}
    </CartContext.Provider>
  )
}
export { CartProvider, CartContext };
export default CartContext;