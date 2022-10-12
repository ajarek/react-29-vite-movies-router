import "./App.css"
import { Routes, Route } from "react-router-dom"
import { PageHome } from "./page/PageHome/PageHome"
import { PageMoviesSearch } from "./page/PageMoviesSearch/PageMoviesSearch"
import { PageMoviesResult } from "./page/PageMoviesResult/PageMoviesResult"
import { PageLogin } from "./page/PageLogin/PageLogin"
import { PageLogout } from "./page/PageLogout/PageLogout"
import { Page404 } from "./page/Page404/Page404"
import { Navigation } from "./components/Navigation/Navigation"
import { useUser } from "./contexts/UserContext"
function App() {
  const { isUserLoggedIn } = useUser()


  return (
    <div className='App'>
      <Navigation />
      <Routes>
      {
          !isUserLoggedIn ?
          <Route
            path='*'
            element={<PageLogin />}
          />
          :
          <>
            <Route
              path='/'
              element={<PageHome />}
            />
             <Route
                path={'/movies'}
              >
             <Route
                  path={':imdbID'}
                  element={<PageMoviesResult />}
                />
                </Route>
            <Route
              path='/movie/search'
              element={<PageMoviesSearch />}
            >
               <Route
                    path={':searchPhrase'}
                    element={<PageMoviesSearch />}
                  />
            </Route>
            <Route
              path='/logout'
              element={<PageLogout />}
            />
          
          <Route
              path='*'
              element={<Page404 />}
            />
            
            </>
}
      </Routes>
    </div>
  )
}

export default App
