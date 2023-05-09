import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from "react-router-dom";

function TasksList() {

    
    //seleccionamoos las tareas que hay en el estado de redux
   const tasksState = useSelector(state => state.tasks)
   const dispatch = useDispatch()
//   console.log("desde otro componente")
//   console.log(tasksState)

    const handleDelete = (id) => {
        console.log(id)
        dispatch(deleteTask(id))
    }
  return (
    <div>
        <header className='m-4'>
            <h1 className='display-2'>Task: <span className='badge bg-info'>{tasksState.length}</span></h1>
            <Link className='btn btn-outline-info' to='/create'>
                Crear Tarea
            </Link>
        </header>
        
        {
            tasksState.map(task =>(
                <div className='d-flex justify-content-center' >
                <div className='card text-center m-4 w-50 ' key={task.id}>
                    <div className='card-body '>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button className='btn btn-danger m-2' onClick={() => handleDelete(task.id)}>DELETE</button>
                    <Link className='btn btn-info m-2' to={`/edit/${task.id}`}>
                        Editar Tarea
                    </Link>
                    </div>
                </div>
                </div>
            ))
        }
    </div>
  )
}

export default TasksList