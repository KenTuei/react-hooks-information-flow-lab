// components/ShoppingList.js
import React, { useState } from 'react';
import Item from './Item';
import Filter from './Filter';

const ShoppingList = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const itemsToDisplay = items.filter(item => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item, index) => (
          <Item key={index} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
