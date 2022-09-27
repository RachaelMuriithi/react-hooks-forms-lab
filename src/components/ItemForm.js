import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({itemValue, getNewItem , onItemFormSubmit}) {

  return (
    <form className="NewItem" onSubmit={(event) => onItemFormSubmit(event)}>
      <label>
        Name:
        <input type="text" name="name" value={itemValue.name} onChange={(event) => getNewItem(event)} />
      </label>

      <label>
        Category:
        <select name="category" value={itemValue.category} onChange={(event) => getNewItem(event)} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export  {ItemForm,uuid};