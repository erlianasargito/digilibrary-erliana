import React, { useState } from 'react'
import Button from '../../components/Button'
import LayoutAuth from '../../layouts/auth'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [fullname, setFullName] = useState("")

    const emailChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
    }

    const passwordChange = (e) => {
        e.preventDefault()
        setFullName(e.target.value)
    }

    const usernameChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const fullnameChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const checkRegister = (e) => {
        e.preventDefault()
        if (email === "erliana@gmail.com") {
            if (password === "123rli" ) {
                alert("Register succeed! Redirect you..")
                window.location.replace("/login")
            }
            else{
                alert("Password inccorect! Please try again.")
            }
        }
        else{
            alert("Account was not found! Register now.")
        }
    }

    const checkLogin = (e) => {
        e.preventDefault()
        window.location.replace("/")
    }
  return (
    <LayoutAuth>
    <div className='login-form-wrapper'>
        <form>
        <h3>Register</h3>
        <div>
        <label>
            Username:
        </label>
        <input type={"text"} placeholder='Username' onChange={(e) => usernameChange(e)} />
        <label>
            Full Name:
        </label>
        <input type={"text"} placeholder='Full Name' onChange={(e) => fullnameChange(e)} />
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
    <Button buttonName="Submit" onClick={(e) => checkRegister(e)}/>
    <Button buttonName="Login" onClick={(e) => checkLogin(e)}/>
    </LayoutAuth>
  )
}

export default Register