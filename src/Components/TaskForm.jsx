import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from "react-router-dom";
import { combineReducers } from '@reduxjs/toolkit';

function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description:''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const handleChange = (e) => {
        //console.log(e.target.name, e.target.value)
        setTask({...task, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(params.id){
            dispatch(updateTask(task))
        }else{
            dispatch(addTask({
                ...task,
                id: uuid()
            }))
        }
        navigate('/')
    } 

    useEffect(()=>{
        if (params.id){
           setTask(tasks.find((task) => task.id === params.id))
        }
    },[])


  return (
    <div className='d-flex justify-content-center m-4'>
    <div className='card w-75'>
        <div className="card-header text-center">
            Ingresar nueva tarea
        </div>
        <div className='card-body'>
        <form className='' onSubmit={handleSubmit}>
            <input className='form-control m-2' type="text" name='title' placeholder='title'
                onChange={handleChange}
                value={task.title}
            />

            <textarea className='form-control m-2' name='description' placeholder='description'
                onChange={handleChange}
                value={task.description}
            />
            {
                params.id ? (
                <div className='text-center'>
                    <button className='btn btn-outline-success'>ACTUALIZAR</button>
                </div>)
                :
                <div className='text-center'>
                    <button className='btn btn-success'>GUARDAR</button>
                </div>
            }
            
        </form>
        </div>
    </div>
    </div>
  )
}

export default TaskForm