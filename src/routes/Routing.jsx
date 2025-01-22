import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotfFound'
import Home from '../pages/Home'
import { Register } from '../pages/auth/Register'
import { Login } from '../pages/auth/Login'
import { CreateTodo } from '../pages/Ceate'


const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login'  element={<Login />}/>
      <Route path='/register'element={<Register/> }/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/create' element={<CreateTodo/>}/>


    </Routes>
  )
}

export default Routing
