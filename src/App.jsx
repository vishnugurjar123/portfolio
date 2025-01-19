import React from 'react'
import Navbar from './component/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Project from './component/Project'



import Footer from './component/Footer'



const App = () => {
  return (
    <>
    <switch>
    <Navbar/>
<Routes>

  <Route path='/' element={<Home></Home>}></Route>
  <Route  path='/About' element={<About></About>}></Route>
  <Route path='/Contact' element={<Contact></Contact>}></Route>
  <Route  path='/Project' element={<Project></Project>}></Route>
</Routes>
<Footer/>

</switch>
    </>
  )
}

export default App