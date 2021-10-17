import React, { useState } from 'react'
import './EntryStyle.css'
import { Jumbotron } from 'react-bootstrap'
import { LoginForm } from '../components/Login'
import { ResetPassword } from '../components/PasswordReset'

export const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [frmLoad, setFrmLoad] = useState('login')

  const handleOnChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'email':
        setEmail(value)
        break

      case 'password':
        setPassword(value)
        break

      default:
        break
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return alert('Please complete the form.')
    }

    // Todo call API to submit the form
    console.log(email, password)
  }

  const handleOnResetSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      return alert('Please enter your email.')
    }

    // Todo call API to submit the form
    console.log(email)
  }

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType)
  }

  return (
    <div className="entry-page">
      <Jumbotron>
        {frmLoad === 'login' && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}

        {frmLoad === 'reset' && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  )
}
