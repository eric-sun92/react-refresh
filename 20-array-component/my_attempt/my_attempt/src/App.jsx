import { useState } from 'react'

function App() {
  const [letters, setLetters] = useState(["A", "B", "C"])
  const INITIAL = ["A", "B", "C"]

  const remove_first = () => {
    setLetters((x) => {
      return x.slice(1)
    })
  }

  const remove_specific = (input) => {
    let newLetters = []
      letters.forEach((letter) => {
        if(input !== letter) {
          newLetters.push(letter)
        }
      })
    setLetters(newLetters)
  }

  const add_first = (letter) => {
    setLetters((previous) => {
      return [letter, ...previous]
    })
  }

  const add_end = (letter) => {
    setLetters((previous) => {
      return [...previous, letter]
    })
  }

  return (
    <>
    <h1> {letters}</h1>
    <br></br>
    <h2>1</h2>
    <button onClick={remove_first}>Remove First</button> 
    <br></br> 
    <h2>2</h2>
    <label>Remove Specific Letter</label>
    {letters.map(letter => {
      return (<button onClick={() => remove_specific(letter)}>Remove {letter}</button>)
    })}
    <h2>3</h2>
    <label>Add to Beginning</label>
    {INITIAL.map((letter) => {
      return <button onClick={() => add_first(letter)}>{letter}</button>
    })}
    <h2>4</h2>
    <label>Add to End</label>
    {INITIAL.map((letter) => {
      return <button onClick={() => add_end(letter)}>{letter}</button>
    })}
    <h2>5</h2>
    <button onClick={() => setLetters([])}>Clear</button>
    <h2>6</h2>
    <button onClick={() => setLetters(INITIAL)}>Reset</button>

    </>
  )
}

export default App

// 1. Create state that stores an array with the initial value of `["A", "B", "C"]`
// 2. Add the ability to remove the first element from the array
// 3. Add the ability to remove a specific letter from the array
// 4. Add the ability to add a new element to the start of the array
// 5. Add the ability to add a new element to the end of the array
// 6. Add the ability to clear the array
// 7. Add the ability to reset the array to the initial value
