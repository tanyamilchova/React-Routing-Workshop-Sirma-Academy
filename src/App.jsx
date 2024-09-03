
import { Button } from "@mui/material"
import Header from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home"
import Pricing from "./components/Pricing"
import Login from "./components/Login"
import Register from "./components/Register"
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext"
import TodoList from "./components/ToDoList"
import CreateTodo from "./components/CreateTodo"





function App() {

  return (
    <AuthContextProvider>

    <Header/>

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/todos' element={<TodoList/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/todos/add' element={<CreateTodo/>} />
    </Routes>
    </AuthContextProvider>
  )
}

export default App
