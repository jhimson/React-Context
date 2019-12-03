import React, { useContext, useState } from "react";
import { CategoriesCTX } from "../contexts/CategoriesCTX";
import { ItemsCTX } from "../contexts/ItemsCTX";
const Main = () => {
  const [newCategory, setNewCategory] = useState("");
  const [newItem, setNewItem] = useState("");

  const { categories, addCategory } = useContext(CategoriesCTX);

  const { items, addItem } = useContext(ItemsCTX);

  return (
    <div>
      <input
        type="text"
        value={newCategory}
        onChange={e => setNewCategory(e.target.value)}
        placeholder={`Enter Category`}
      />
      <br />
      <input
        type="text"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        placeholder={`Enter Item`}
      />
      <br />
      <h1>{JSON.stringify(categories)}</h1>
      <h1>{JSON.stringify(items)}</h1>
      <button
        onClick={() => {
          addCategory(newCategory);
          setNewCategory("");
        }}
      >
        Add Category
      </button>
      <button
        onClick={() => {
          addItem(newItem);
          setNewItem("");
        }}
      >
        Add Item
      </button>
    </div>
  );
};

export default Main;
