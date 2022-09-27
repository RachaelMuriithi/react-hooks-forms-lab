import React, { useState } from "react";
import {ItemForm, uuid }from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setInputChange] = useState("");
  const [itemData, setAddedItem] = useState({
    id:uuid(),
    name:"",
    category:"Dairy",
  })
  const [myItems, setItems] = useState(items);

 
  //filter functionality by catergory
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    // console.log(selectedCategory)
  }
  // search functionality by user input
  function handleSearchChange(event) {
    setInputChange(event.target.value);
    // console.log(event.target.value)
  }


   // add functionality 
  function addNewItem(event) {
    const {value, name} = event.target;
    setAddedItem({
      ...itemData,
      [name]:value
    })

  }

  function onItemFormSubmit(event) {
    event.preventDefault();
    const newItems = [...items, itemData];
    setItems(newItems);
    setAddedItem({
      id:uuid(),
      name:"",
      category:"Dairy",
    });

    console.log(newItems)
  }

  const itemsToDisplay = myItems
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;

  })
  .filter((item) => item.name.includes(search));

 


  return (
    <div className="ShoppingList">
      <ItemForm itemValue={itemData} getNewItem ={addNewItem}  onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search ={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;