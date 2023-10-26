import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from "./Components/Layout/Layout"
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import Contact from "./Components/pages/Contact"
import Error from './Components/pages/Error'
import Help from './Components/pages/Help'
import Quizzes from './Components/pages/Quizzes'
import Test from './Components/requirements/Test'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='quizzes' element={<Quizzes />}>
          <Route path='quizzes/test' element={<Test/>}/>
        </Route>
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
