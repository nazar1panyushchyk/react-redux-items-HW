import { dataItems } from "../../data/data";

export const itemsReducers = (state = dataItems, action) => {
    const { type, payload } = action;
    console.log(state);
    console.log(action);
    console.log(payload);
    
    switch (type) {
        case 'ADD_ITEM': {
        const { id } = payload;
        const existingItem = state.cart.find(item => item.id === id);

        if (existingItem) {
            return { ...state, cart: state.cart.map(item => item.id === id
                ? { ...item, count: item.count + 1} : item
            )}
        } else {
            const itemToAdd = state.items.find(item => item.id === id);
            if (!itemToAdd) return state;
            return { ...state, cart: [ ...state.cart, { ...itemToAdd, count: 1}]
        }
        }
        }
        case 'INCREMENT': {
            const { id } = payload;

                return { ...state, cart: state.cart.map(item => item.id === id
                    ? {...item, count: item.count + 1} : item
            )}
        }
        case 'DECREMENT': {
            const { id } = payload;
            const updatedCart = state.cart.map(item => item.id === id ? { ...item, count: item.count - 1} : item);
            const filteredCart = updatedCart.filter(item => item.count > 0);
            return { ...state, cart: filteredCart };
        }
        case 'REMOVE_ITEM': {
           const { id } = payload;
            const newCart = state.cart.filter(item => item.id != id);
            return { ...state, cart: newCart };
        }
        default:
            return state;
}
}
