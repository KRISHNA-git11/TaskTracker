import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setshowAddTask] = useState(false)

  const [tasks, setTask] = useState([
    {
        id:1,
        text:'Homework',
        day:'Monday',
        reminder:true
    },
    {
        id:2,  
        text:'Sleep',
        day:'Night by 10PM',
        reminder:true
    },
    {
        id:3,
        text:'Doc appointment',
        day:'Tuesday Morning 11AM',
        reminder:false
    }]
)

    const addTask = (task)=>{
      const id =Math.floor(Math.random()*10000) + 1 ;
        const newTask = {id,...task};
        setTask([...tasks,newTask]);
        // console.log(tasks)
      // console.log('task',task)

    }

    const toggleReminder = (id)=>{
      setTask(tasks.map((task)=>task.id === id ? {...task, reminder:!task.reminder} : task))
      // console.log("id",id)
    }
    const deleteTask = (id) =>{
          // console.log('delete',id)
          setTask(tasks.filter((tasks)=>tasks.id !== id))
    }

  return (
    <div className="container">
      <Header onShow={()=>setshowAddTask(!showAddTask)} showAddTask={showAddTask} title="Task Tracker"/>
      {showAddTask && <AddTask  onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: "No due tasks"}
    </div>
  );
}

export default App;
