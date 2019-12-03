import React, { useContext, useState, useEffect } from "react";
import { CategoriesCTX } from "../contexts/CategoriesCTX";
import { ItemsCTX } from "../contexts/ItemsCTX";
const Main = () => {
  const [newCategory, setNewCategory] = useState({});
  const [newItem, setNewItem] = useState("");

  const { categories, addCategory, fetchCategories } = useContext(
    CategoriesCTX
  );

  const { items, addItem } = useContext(ItemsCTX);

  useEffect(() => {
    fetchCategories();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <label htmlFor="">Category ID:</label>
      <input
        type="text"
        value={newCategory.category_id}
        onChange={e =>
          setNewCategory({ ...newCategory, category_id: e.target.value })
        }
        placeholder={`Enter Category`}
      />
      <br />
      <label htmlFor="">Category Name:</label>
      <input
        type="text"
        value={newCategory.name}
        onChange={e => setNewCategory({ ...newCategory, name: e.target.value })}
        placeholder={`Enter Category`}
      />
      <br />
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
      <button
        onClick={() => {
          fetchCategories();
        }}
      >
        Fetch Categories
      </button>
    </div>
  );
};

export default Main;
