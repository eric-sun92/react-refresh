import { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setAge(prev => prev - 1)}>-</button>
      {age}
      <button onClick={() => setAge(prev => prev + 1)}>+</button>

      <div>My name is {name} and I am {age} years old.</div>
    </>
  )
}

export default App

// 1. Create a new function component that has state for name and age
// 2. Create a text input that when updated will update the name state
// 3. Create a plus and minus button that will update the age state and display the state between the two buttons
// 4. Display the string `My name is {name} and I am {age} years old` in your JSX
// 5. Repeat but for a class component instead of a function component