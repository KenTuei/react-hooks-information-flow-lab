// components/Filter.js
import React from 'react';

const Filter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter">
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default Filter;
