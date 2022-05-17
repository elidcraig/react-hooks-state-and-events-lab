import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState(false)

  const appClass = mode ? "App dark" : "App light"

  const clickHandler = () => setMode(!mode)

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={clickHandler}>{mode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
