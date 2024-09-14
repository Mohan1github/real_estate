import React from 'react'
import "./App.css"
import Signin from './pages/signin'
import Signup from './pages/signup'
import Profile from './pages/profile'
import About from './pages/about'
import Home from './pages/home'
import Header from './components/header'
import Propertybydetails from './pages/propertydetails'
import { BrowserRouter , Routes , Route} from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/sign-up" element={<Signup/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/login" element={<Signin/>}></Route>
      <Route path="/propertydetails/:id" element={<Propertybydetails/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App