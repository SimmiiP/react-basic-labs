import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';

function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
      {id: 1, title:"Dishes", deadline: "Today", description: "Empty dishwasher"},
      {id: 2, title: "Laundry", deadline: "Tomorrow", description: "Fold clothes and put away"},
      {id: 3, title: "Tidy up", deadline: "Today", description: "Clean Up Room"},
      {id: 4, title: "Walk Dog", deadline: "Tommorow", description: "Walk Around the Park"},
      {id: 5, title: "Appointment", deadline: "Today", description: "Go To the Doctors"}
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
    />
  ))} 

      </div>
  );
}

export default App;
