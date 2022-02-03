import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4} from 'uuid';
function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
      {id: 1, title:"Dishes", deadline: "Today", description: "Empty dishwasher", done: false},
      {id: 2, title: "Laundry", deadline: "Tomorrow", description: "Fold clothes and put away", done: false},
      {id: 3, title: "Tidy up", deadline: "Today", description: "Clean Up Room", done: false},
      {id: 4, title: "Walk Dog", deadline: "Tommorow", description: "Walk Around the Park", done: false},
      {id: 5, title: "Appointment", deadline: "Today", description: "Go To the Doctors", done: false}
    ]
  });

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }

  console.log(formState);

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();

    tasks.push(form);
    setTaskState({tasks});
  }

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
      done={task.done}
      markDone={() => doneHandler(index)}
      deleteTask = {() => deleteHandler(index)}
    />
  ))} 
 <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
 
 

      </div>
  );
}

export default App;
