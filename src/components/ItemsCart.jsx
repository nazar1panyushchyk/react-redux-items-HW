import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slice/itemsSlice";
import { removeItem } from "../redux/slice/itemsSlice";
import { useNavigate } from "react-router-dom";
import { GiMoneyStack } from "react-icons/gi";

export default function ItemsBasket() {
  const cart = useSelector(state => state.items.cart);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchase = () => {
    if (cart.length === 0) {
      alert("Ваш кошик пустий!")
    } else {
      alert("Заказ успішний!")
    }
  }
  console.log(cart);
  return (
    <>
      <button onClick={() => navigate("/")}>Назад до меню</button>
      <ul>
        {cart.map(({ id, name, price, count, img }) => (
          <li key={id}>
            <img src={img} alt="pizza" />
            <h2 style={{ color: "black" }}>{name}</h2>
            <p style={{ color: "black" }}>
              {price} <GiMoneyStack />
            </p>
            <p style={{ color: "black" }}>{count}</p>
            <p style={{ color: "black" }}>
              Total: {(price || 0) * (count || 0)}
            </p>
            <button onClick={() => dispatch(increment({ id }))}>+</button>
            <button onClick={() => dispatch(decrement({ id }))}>-</button>
            <button onClick={() => dispatch(removeItem({ id }))}>Видалити</button>
          </li>
        ))}
      </ul>
      <button onClick={purchase}>Оформити покупку</button>
    </>
  );
}

