import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {CartContext} from '../Context/index';
import {useContext} from "react";
import { Link } from "react-router-dom";

export default function CartWidget() {
    const {getSumaCart} = useContext(CartContext);

    return(
        <Link to="/cart">
            <button className="cartWidget">
                <FontAwesomeIcon icon= {faCartShopping} />
                <span>{getSumaCart()}</span>
            </button>
        </Link>
    )
  }