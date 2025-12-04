import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/actions/itemsActions";
import { useNavigate } from "react-router-dom";

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
      {cart.map(({ id, name, price, count }) => (
        <li key={id}>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{count}</p>
        <p>Total: {(price || 0) * (count || 0)}</p>
        <button onClick={() => dispatch(increment(id))}>+</button>
        <button onClick={() => dispatch(decrement(id))}>-</button>
        <button onClick={() => dispatch(removeFromCart(id))}>Видалити</button>
        </li>
      ))}
     </ul>
      <button onClick={purchase}>Оформити покупку</button>
    </>
  )
}

