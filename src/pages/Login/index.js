import React, { useState } from 'react'
import Button from '../../components/Button'
import LayoutAuth from '../../layouts/auth'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const passwordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const checkLogin = (e) => {
        e.preventDefault()
        if (email === "erliana@gmail.com") {
            if (password === "123rli" ) {
                window.location.replace("/home")
            }
            else{
                alert("Password inccorect! Please try again.")
            }
        }
        else{
            alert("Account was not found! Register now.")
        }
    }

    const registerUser = (e) => {
        e.preventDefault()
        window.location.replace("/register")
    }
  return (
    <LayoutAuth>
    <div className='login-form-wrapper'>
        <form>
        <h3>Login</h3>
        <div>
        <label>
            Email:
        </label>
        <input type={"text"} placeholder='Email' onChange={(e) => emailChange(e)} />
        </div>
        <div>
            <label>
                Password:
            </label>
            <input type={"password"} placeholder='Password' onChange={(e) => passwordChange(e)} />
        </div>
        </form>
    </div>
    <Button buttonName="Submit" onClick={(e) => checkLogin(e)}/>
    <Button buttonName="Register" onClick={(e) => registerUser(e)}/>
    </LayoutAuth>
  )
}

export default Login