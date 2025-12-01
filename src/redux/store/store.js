import { combineReducers, createStore } from "redux";
import { itemsReducers } from "../reducers/itemsReducers";

const rootReducer = combineReducers({
    items: itemsReducers
});

export const store = createStore(rootReducer);