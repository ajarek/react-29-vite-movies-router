import "./App.css"
import { Routes, Route } from "react-router-dom"
import { PageHome } from "./page/PageHome/PageHome"
import { PageMoviesSearch } from "./page/PageMoviesSearch/PageMoviesSearch"
import { PageLogin } from "./page/PageLogin/PageLogin"
import { PageLogout } from "./page/PageLogout/PageLogout"
import { Navigation } from "./components/Navigation/Navigation"
import { useState } from "react"
import { useUser } from './contexts/UserContext'
function App() {
  
  const { isUserLoggedIn } = useUser()
 console.log(isUserLoggedIn);
   
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<PageHome />}
        />
        <Route
          path='/movie/search'
          element={<PageMoviesSearch />}
        />
        <Route
          path='/login'
          element={<PageLogin  />}
        />
        <Route
          path='/logout'
          element={<PageLogout  />}
          >
          
          </Route>
        
      </Routes>
    </div>
  )
}

export default App
