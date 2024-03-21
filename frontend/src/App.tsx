
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/homePage'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Blogs } from './pages/blog'

function App() {


  return (
    <>
      <Routes>
       <Route path='/' element={<Home/>} />
      <Route path='/signup' element = {<Signup/>} />
      <Route path='/signin' element = {<Signin></Signin>} />
      <Route path='/blogs' element = {<Blogs />}/>
      </Routes>
    </>
  )
}

export default App
