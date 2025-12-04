import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/itemsActions";
import { useNavigate } from "react-router-dom";

export default function Item({ id, name, price }) {
   const dispatch = useDispatch();
   const navigate = useNavigate();
    if (!name || !price) return null;
   const handleAdd = () => {
    dispatch(addToCart(id));
    navigate("/cart");
   }
    return (
      <li>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <button onClick={handleAdd}>Додати в кошик</button>
      </li>
    )
}