
import './App.css'
import { useState } from 'react'

function App () {
  const [taskId,setTaskId] = useState(0)
  const [task,setTask] = useState('')
  const [tasks,setTasks] = useState([])

  const handleChange = () => {
    let copyTask = [...tasks]
    copyTask.push({
      id : taskId,
      title : task,
      isCompleted : false
    })
    setTaskId(taskId+1)
    setTasks(copyTask)
    setTask('')
  }

  const handleDelete = (id) => {
    let copytask = [...tasks]
    copytask = copytask.filter(item => item.id != id)
    setTasks(copytask)
  }

  const handleComplete = (id) => {
    let copyTask = [...tasks];
    let filteredTask = copyTask.filter(item => item.id == id)[0];
    filteredTask.isCompleted = !filteredTask.isCompleted
    setTasks(copyTask)
  }

  return (
    <>
      <h1>Todo List</h1>
      <div className="mb-3 d-flex">
      <input type="email" 
      className="form-control" 
      id="exampleFormControlInput1" 
      placeholder="Enter Task..."
      onChange={(e) => setTask(e.target.value)}
      value={task}
      />

      <button className='btn btn-primary ms-3' onClick={handleChange}>Add</button>
      </div>

      <div>
        <ul className="list-group">
          {tasks.map((item,index)=>(
            <li className="list-group-item" key={`${index}`}>
              <div className='row'>
                <div className='col-6'>
                  <p style={{
                    textDecoration: item.isCompleted ? 'line-through' : ''
                  }}>{item.title}</p>
                </div>
                  <div className='col-6'>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                      <button type="button" className="btn btn-sm btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>
                      <button type="button" className="btn btn-sm btn-success" style={{marginLeft:'30px'}} onClick={()=> handleComplete(item.id)}>{item.isCompleted ? 'Completed' : 'Complete'}</button>
                    </div>
                  </div>
              </div>
            </li>
          ))}

        </ul>
      </div>
      
        
      
    </>
  )
}

export default App
