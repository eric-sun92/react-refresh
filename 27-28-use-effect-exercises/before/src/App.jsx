import { useState, useEffect } from "react"
import { Child } from "./Child"

export default function App() {

  useEffect(() => {
    console.log("Hi")
  }, [])

  const [show, setShow] = useState(true)

  const childComponent = show ? <Child /> : null

  console.log('render')
  
  return (
    <div>
      <button onClick={() => setShow(currentShow => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  )
}
