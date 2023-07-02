import React from 'react'

const Todo = ({item, setItem, removeToDo}) => {

  return (
    <li key={item.id} className="list-item">
      <label className="list-item-label">
        <input type="checkbox" data-list-item-checkbox />
        <span data-list-item-text>{item.name}</span>
      </label>
      <button data-button-delete onClick={() => removeToDo(item.id)}>Delete</button>
    </li>
  )
}

export default Todo
