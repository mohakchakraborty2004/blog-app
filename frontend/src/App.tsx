
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/homePage'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Blogs } from './pages/blog'
import { BlogsP } from './pages/blogsP'
import { CrBlog } from './pages/createBlog'

function App() {


  return (
    <>
      <Routes>
       <Route path='/' element={<Home/>} />
      <Route path='/signup' element = {<Signup/>} />
      <Route path='/signin' element = {<Signin></Signin>} />
      <Route path='/blogs' element = {<Blogs />}/>
      <Route path='/blogs/:id' element = {<BlogsP />}/>
      <Route path='/blogs/create' element = {<CrBlog />}/>
      </Routes>
    </>
  )
}

export default App
