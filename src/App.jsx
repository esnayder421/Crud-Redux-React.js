// import './App.css'
import {TaskForm} from './Components'
import {TasksList} from './Components'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
    <div className='container'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<TasksList/>} />
      <Route path='/create' element={<TaskForm/>} />
      <Route path='/edit/:id' element={<TaskForm/>} />
      </Routes>
      
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
