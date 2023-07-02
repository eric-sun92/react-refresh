import { useState, useEffect } from 'react'
import User from './User'

function App() {

  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data)
    }).finally(() => {
      setLoading(false)
    })
  }, [])


  return (
    <>
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <>
      <h1>User List</h1>
      <ul>
        {
          users && users.map((user) => {
            return (
              <User key={user.id} user={user}/>
            )
          })
        }
      </ul>
      </>)}
    </>
  )
}

export default App

// 1. Fetch all users from the API (https://jsonplaceholder.typicode.com/users) in your App.jsx file using `useEffect`.
// 2. Render an `h1` that says **User List** and below that a `ul` containing a list of all users. This is a perfect use case for fragments since we don't want to wrap it in an extra div.
// 3. The users in the list should be in their own component and that component should take a `name` prop and return the `name` inside an `li` element.