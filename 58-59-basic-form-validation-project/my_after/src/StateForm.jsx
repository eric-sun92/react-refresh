import React, { useState, useMemo } from 'react'
import "./styles.css"
import {checkEmail, checkPassword} from "./validator.js"

const StateForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

    const emailErrors = useMemo(() => {
      return isAfterFirstSubmit ? checkEmail(email) : []
    }, [isAfterFirstSubmit, email, checkEmail])

    const passErrors = useMemo(() => {
      isAfterFirstSubmit ? checkPassword(password) : []
    }, [password, isAfterFirstSubmit, checkPassword])

  
    const submitHandler = (e) => {
      e.preventDefault()

      setIsAfterFirstSubmit(true)

      let tempEmailErrors = checkEmail(email)
      let tempPassErrors = checkPassword(password)
  
      if (tempEmailErrors.length == 0 && tempPassErrors.length == 0) {
        alert("Success")
      }
    }
  
    return (
      <>
        <form className="form" onSubmit={(e) => submitHandler(e)}>
        <div className={`form-group ${emailErrors && emailErrors.length !== 0 ? "error" : ""}`}>
          <label className="label" for="email">Email</label>

          <input className="input" type="email" id="email" value={email} 
          onChange={isAfterFirstSubmit ? (e) => checkEmail(e.target.value) : undefined} required/>

          {emailErrors && emailErrors.length != 0 ? (<div className="msg">{emailErrors[0]}</div>) : <></>}
        </div>
        <div className={`form-group ${passErrors && passErrors.length !== 0 ? "error" : ""}`}>
          <label className="label" for="password">Password</label>
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
          {passErrors && passErrors.length != 0 ? (<div className="msg">{passErrors[0]}</div>) : <></>}
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
      </>
    )
  }

export default StateForm
