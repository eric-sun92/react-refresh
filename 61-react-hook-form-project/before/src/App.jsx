import { FormGroup } from "./FormGroup"
import ReactSelect from "react-select"
import { useRef, useState } from "react"
import "./styles.css"
import { checkCountry, checkEmail, checkPassword } from "./validators"
import {useForm} from "react-hook-form"

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
]

function App() {

  const {register, handleSubmit, 
    formState: { errors }} = useForm()

  const countryRef = useRef()

  const [countryErrors, setCountryErrors] = useState([])

  function onSubmit(data) {
    console.log(data)
    alert("Success")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormGroup errorMessage={errors?.email?.message}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" id="email" 
        {...register("email", 
        {required: {value: true, message: "Required"}, 
        validate: value => {
          if (!value.endsWith("@webdevsimplified.com")) {
            return "Must end with @webdevsimplified.com"
          }
        }})} />
      </FormGroup>
      <FormGroup errorMessage={errors?.password?.message}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          {...register("password", 
          {
            required: {value: true, message: "Required"},
            validate: value => {
              if (value.length < 10) {
                return "Min Length is 10 characters"
              }
            }
          })}
        />
      </FormGroup>
      <FormGroup errors={countryErrors}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          ref={countryRef}
          options={COUNTRY_OPTIONS}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default App
