import UserCard from "./UserCard"
import user from "../../before/user.json"
import "../../before/user.css"


function App() {
  return (
    <>
      <UserCard name={user.name} age={user.age} address={user.address} phoneNumber={user.phoneNumber}/>
    </>
  )
}

export default App
