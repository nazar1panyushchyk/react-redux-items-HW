import { dataItems } from "../../data/data";

export const itemsReducers = (state = dataItems, action) => {
    const { type, payload } = action;
    console.log(state);
    console.log(action);
    console.log(payload);
    
    switch (type) {
        case 'addItem': {
        const id = action.payload.id;
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
        case 'increment': {
            const id = action.payload.id;

                return { ...state, cart: state.cart.map(item => item.id === id
                    ? {...item, count: item.count + 1} : item
            )}
        }
        case 'decrement': {
            const id = action.payload.id;
            const updatedCart = state.cart.map(item => item.id === id ? { ...item, count: item.count - 1} : item);
            const filteredCart = updatedCart.filter(item => item.count > 0);
            return { ...state, cart: filteredCart };
        }
        case 'removeItem': {
            const id = action.payload.id;
            const newCart = state.cart.filter(item => item.id != id);
            return { ...state, cart: newCart };
        }
        default:
            return state;
}
}
