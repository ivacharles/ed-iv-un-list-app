import React, { useState, useEffect, createContext } from 'react'
const AuthContext = createContext();
const { Provider } = AuthContext;


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    fetch('/api/auth/login')
    .then(response => {
      if(!response.ok) { throw new Error('Unauthenticated') }
      return response.json();
    })
    .then(body => setUser(body))
    .catch(err => setUser(false))
  } , [])

  const authenticate = (contact_email, password) => {
    return fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ contact_email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error('Login Failed');
      }
      return response.json();
    })
    .then((body) => {
      setUser(body);
      return body;
    });
  }

  const signup = (firstName, lastName, contact_email, password, zip, city) => {
    return fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({firstName, lastName, contact_email, password, zip, city}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error('Sign Up Failed');
      }
      console.log("\n\n\n\n\n\n\n\n\n " + response)
      return response.json();
    })
    .then((body) => {
      setUser(body);
      return body;
    });
  }

  const signout = () => {
    return fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      if(!response.ok) { throw new Error('Logout Failed'); }
      return response.json();
    })
    .then((body) => {
      setUser(false)
      return body;
    });
  }

  return (
    <Provider
      value={{
        signup,
        authenticate,
        signout,
        user,
        isAuthenticated: user ? true : false,
      }}
    >
      { children }
    </Provider>
  )
}

export { AuthContext, AuthProvider };