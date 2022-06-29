import React, { useState } from "react";

function Item({ name, category, isInCart, handleAddToCartClick, itemId }) {
  // const [isInCart, setIsInCart] = useState(false);

  // function handleAddToCartClick() {
  //   setIsInCart((isInCart) => !isInCart);
  // }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={() => {
          handleAddToCartClick(itemId)
        }}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
