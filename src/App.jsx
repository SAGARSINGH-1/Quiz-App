import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/01-Home"
import About from "./Components/Home/About"
import Contact from "./Components/Home/Contact"
import Error from './Components/Home/Error'
import Help from './Components/Home/Help'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='help' element={<Help />}/>

        <Route path='*' element={<Error/>} />
      </Route>
    )
  )

  return (
    <div className="flex justify-center overflow-hidden">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
