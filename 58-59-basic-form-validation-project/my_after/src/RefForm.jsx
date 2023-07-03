import React, { useState, useRef } from 'react'
import "./styles.css"
import {checkEmail, checkPassword} from "./validator.js"

const RefForm = () => {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const emailRef = useRef("")
    const passwordRef = useRef("")
  
    const [emailErrors, setEmailErrors] = useState([])
    const [passErrors, setPassErrors] = useState([])

    const [isAfterFirstTime, setIsAfterFirstTime] = useState(false)
  
    const submitHandler = (e) => {
      e.preventDefault()
      setIsAfterFirstTime(true)

      let tempEmailErrors = checkEmail(emailRef.current.value)
      let tempPassErrors = checkPassword(passwordRef.current.value)
  
      setEmailErrors(tempEmailErrors)
      setPassErrors(tempPassErrors)
  
      if (tempEmailErrors.length == 0 && tempPassErrors.length == 0) {
        alert("Success")
      }
    }
  
    return (
      <>
        <form className="form" onSubmit={(e) => submitHandler(e)}>
        <div className={`form-group ${emailErrors && emailErrors.length !== 0 ? "error" : ""}`}>
          <label className="label" for="email">Email</label>
          <input className="input" type="email" id="email" ref={emailRef} onChange={isAfterFirstTime ?
            () => {
              setEmailErrors(checkEmail(emailRef.current.value))
            } : undefined
          } required/>
          {emailErrors && emailErrors.length != 0 ? (<div className="msg">{emailErrors[0]}</div>) : <></>}
        </div>
        <div className={`form-group ${passErrors && passErrors.length !== 0 ? "error" : ""}`}>
          <label className="label" for="password">Password</label>
          <input
            className="input"
            ref={passwordRef}
            onChange={isAfterFirstTime ?
              () => {
                setPassErrors(checkPassword(passwordRef.current.value))
              } : undefined
            }
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

export default RefForm
