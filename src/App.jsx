import './App.css';
// import Item from "./components/Item";
import ItemsCart from "./components/ItemsCart";
import ItemsList from "./components/ItemsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemsList />}></Route>
      <Route path="/cart" element={<ItemsCart />}></Route>
    </Routes>
    </BrowserRouter>

    {/* <Item /> */}
    </>
  )
}

export default App
