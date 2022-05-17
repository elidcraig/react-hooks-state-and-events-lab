import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const clickHandler = () => setInCart(!inCart)

  const liClass = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickHandler}>{buttonText}</button>
    </li>
  );
}

export default Item;
