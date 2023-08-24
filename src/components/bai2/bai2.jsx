import React from 'react'
import { AuthContextProvider } from './AuthContext'
import LoginForm from './LoginForm'
import Home from './Home'

function Bai2() {
  return (
    <AuthContextProvider>
      <h2>Authentication App</h2>
      <LoginForm />
      <Home />
    </AuthContextProvider>
  )
}

export default Bai2