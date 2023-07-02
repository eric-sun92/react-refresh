import { useState } from 'react'
import "./styles.css"
import Todo from './Todo'

function App() {

  const [count, setCount] = useState(0)
  const [item, setItem] = useState("")
  const [list, setList] = useState([])


  const addToDo = (item) => {

    if (item == "") return
    setList((prev) => {
      return [...prev, {name: item, completed: false, id: crypto.randomUUID()}]
    })

    setItem("")
  }

  const removeToDo = (id) => {

    setList((prev) => {
      return prev.filter((prevItem) => {
         return prevItem.id !== id
      })
    })
  }

  return (
    <>
    <ul id="list">
      {list && list.map((listItem) => {
        return (
          <Todo key={listItem.id} item={listItem} removeToDo={removeToDo}/>
      )})}
    </ul>

    <div id="new-todo-form">
      <label for="todo-input">New To Do</label>
      <input type="text" id="todo-input" value={item} onChange={(e) => setItem(e.target.value)}/>
      <button onClick={() => addToDo(item)}>Add Todo</button>
    </div>

    </>
  )
}

export default App
