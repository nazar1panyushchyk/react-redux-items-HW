import { createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItem } from "../operations/operations";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [
      {
        id: 1,
        img: "https://www.rakijagrill.com/wp-content/uploads/2020/07/Margherita-.jpg",
        name: "Піца Маргарита",
        price: 179,
        count: 0,
      },
      {
        id: 2,
        img: "https://www.cobsbread.com/cdn/shop/articles/Pepperoni-pizza-850x630-1-585x400-1.jpg?v=1762545342",
        name: "Піца Пепероні",
        price: 219,
        count: 0,
      },
      {
        id: 3,
        img: "https://italianstreetkitchen.com/au/wp-content/uploads/2024/02/pizza-_0008_four_cheese_pizza_lunch.jpg",
        name: "Піца 4 Сири",
        price: 249,
        count: 0,
      },
    ],
    cart: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.error = null), (state.items = action.payload);
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addItem.fulfilled, (state, action) => {
        const id = action.payload;

        const existingItem = state.cart.find((item) => item.id === id);

        if (existingItem) {
          existingItem.count += 1;
          return;
          // return {
          //   ...state,
          //   cart: state.cart.map((item) =>
          //     item.id === id ? { ...item, count: item.count + 1 } : item
          //   ),
          // };
        }

        const itemToAdd = state.items.find((item) => item.id === id);
        if (!itemToAdd) return;
        state.cart.push({ ...itemToAdd, count: 1});
        // return {
        //   ...state,
        //   cart: [...state.cart, { ...itemToAdd, count: 1 }],
        // };
      })

      // .addCase(removeItem.fulfilled, (state, action) => {
      //   const { id } = action.payload;
      //   const newCart = state.cart.filter((item) => item.id != id);
      //   return { ...state, cart: newCart };
      // });
  },
  reducers: {
    // add(state, action) {
    //   const { id } = action.payload;
    //   console.log(action.payload);

    //   const existingItem = state.cart.find((item) => item.id === id);

    //   if (existingItem) {
    //     return {
    //       ...state,
    //       cart: state.cart.map((item) =>
    //         item.id === id ? { ...item, count: item.count + 1 } : item
    //       ),
    //     };
    //   } else {
    //     const itemToAdd = state.items.find((item) => item.id === id);
    //     if (!itemToAdd) return state;
    //     return { ...state, cart: [...state.cart, { ...itemToAdd, count: 1 }] };
    //   }
    // },
    increment(state, action) {
      const { id } = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        ),
      };
    },
    decrement(state, action) {
      const { id } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      const filteredCart = updatedCart.filter((item) => item.count > 0);
      return { ...state, cart: filteredCart };
    },
    removeItem(state, action) {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      // return { ...state, cart: newCart };
    },
  },
});

export const { increment, decrement, removeItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
