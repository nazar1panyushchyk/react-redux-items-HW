import { useSelector } from "react-redux";
import Item from "./Item";

export default function ItemsList() {
    const items = useSelector(({ items }) => items.items);
    console.log(items);
    return (
        <ul>
            {items.length > 0 &&
                items.filter(item => item && item.id)
                .map(({ id, name, price, count}) => (
                    <Item key={id} id={id} name={name} price={price} count={count} />
                ))}
        </ul>
    )
}