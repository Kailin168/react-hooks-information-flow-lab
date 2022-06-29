import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsAlreadyAddedToCart, setItemsAlreadyAddedToCart] = useState({});

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleAddToCartClick(itemId) {
    const newItems = {...itemsAlreadyAddedToCart};
    newItems[itemId] = !newItems[itemId]
    setItemsAlreadyAddedToCart(newItems);

    // Not Working due to the way react handles
    // itemsAlreadyAddedToCart[itemId] = !itemsAlreadyAddedToCart[itemId]
    // setItemsAlreadyAddedToCart(itemsAlreadyAddedToCart);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter onCategoryChange={handleCategoryChange} />
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id}
            itemId={item.id}
            name={item.name}
            category={item.category}
            isInCart={itemsAlreadyAddedToCart[item.id]}
            handleAddToCartClick={handleAddToCartClick} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
