import React, { createContext, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export const FirebaseContext = createContext(null)
export const AuthContext = createContext(null)


function Layout({ children }) {
  const [usernow, setUsernow] = useState(null)
  return (
    <AuthContext.Provider value={{usernow,setUsernow}}>
      <Navbar />
      {children}
      <Footer />
    </AuthContext.Provider>
  )
}

export default Layout