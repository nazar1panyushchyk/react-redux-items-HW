import { useDispatch } from "react-redux";
import { addItem } from "../redux/operations/operations";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

export default function Item({ id, name, price, img }) {
   const dispatch = useDispatch();
   const navigate = useNavigate();
    if (!name || !price) return null;
   const handleAdd = () => {
    dispatch(addItem(id));
    navigate("/cart");
   }
  return (
    <li>
      <img src={img} alt="pizza" />
      <h2 style={{ color: "black" }}>{name}</h2>
      <p style={{ color: "black" }}>Price: {price}</p>
      <button onClick={handleAdd}>
        Додати в кошик <IoCartOutline />
      </button>
    </li>
  );
}