import React from 'react'


export const UserContext = React.createContext()

export const useUser = () => {
  return React.useContext(UserContext)
}

export const UserContextProvider = (props) => {
  const {
    children
  } = props

  const [isUserLoggedIn, setUserLoggedIn] = React.useState(
    localStorage.getItem('isUserLoggedIn') === 'true'
  )

  const logIn = React.useCallback(() => {
    setUserLoggedIn(true)
  }, [])

  const logOut = React.useCallback(() => {
    setUserLoggedIn(false)
  }, [])

  React.useEffect(() => {
    if (isUserLoggedIn === true) {
      localStorage.setItem('isUserLoggedIn', 'true')
    } else {
      localStorage.removeItem('isUserLoggedIn')
    }
  }, [isUserLoggedIn])

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        logIn,
        logOut
      }}
    >
      {children}
    </UserContext.Provider>
  )
}




export default UserContextProvider