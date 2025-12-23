import { createSlice } from "@reduxjs/toolkit";
import { dataItems } from "../../data/data";

const itemsSlice = createSlice({
    name: "items",
    initialState: dataItems,
    reducers: {
        add(state, action) {
            const { id } = action.payload;
            console.log(action.payload);
        
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
        },
        increment(state, action) {
            const { id } = action.payload;
             return { ...state, cart: state.cart.map(item => item.id === id
                    ? {...item, count: item.count + 1} : item
            )}
        },
        decrement(state, action) {
            const { id } = action.payload;
            const updatedCart = state.cart.map(item => item.id === id ? { ...item, count: item.count - 1} : item);
            const filteredCart = updatedCart.filter(item => item.count > 0);
            return { ...state, cart: filteredCart };
        },
        remove(state, action) {
            const { id } = action.payload;
            const newCart = state.cart.filter(item => item.id != id);
            return { ...state, cart: newCart };
        }
    }
})

export const { add, increment, decrement, remove } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;