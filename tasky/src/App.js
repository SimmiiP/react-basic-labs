import logo from './logo.svg';
import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty Dishwasher">
      </Task>
      <Task
       title="Laundry" deadline="Tommorow" description="Fold Laundry and put it away">
      </Task> 
      <Task
       title="Tidy" deadline="Today" description="Clean Up Room">
       </Task>
      </div>
  );
}

export default App;
