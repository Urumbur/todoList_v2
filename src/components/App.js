import React, {useState, useEffect} from 'react';
import Form from './Form';
import TaskList from './TaskList';
import uuid from 'uuid/v4';

const App = () => {
  
  const loadTasks = () => {
    const str = localStorage.getItem("tasks");
    let tasks = JSON.parse(str);
    if(!tasks) {
      return tasks = [];
    }
    return tasks;
  }

  const [tasksList, changeTaskList] = useState(loadTasks());

  const deleteTask = id => {
    changeTaskList(tasksList.filter(task => task.id !== id));
  }

  const changeTaskStatus = id => {
    const newArray = tasksList.slice();
    const index = newArray.findIndex(task => task.id === id);
    const task = newArray[index];
    task.active = !task.active;
    task.finishDate ? task.finishDate = null : task.finishDate = new Date().toISOString().slice(0, 10);
    changeTaskList(newArray);
  }

  const addTask = (name, date, important) => {
    const task = {
      id: uuid(),
      name,
      important,
      active: true,
      date
    }
    changeTaskList([...tasksList, task]);
  } 

  const sortTasks = () => {
    if(tasksList) {
      return tasksList.sort((a,b) => b.date < a.date ? 1 : -1);
    }
  }

  useEffect(() => {
    const str = JSON.stringify(tasksList);
    localStorage.setItem("tasks", str);
  }, [tasksList]);

  return (
    <div>
      <Form addTask={addTask} />
      <TaskList tasksList={tasksList} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus} sortTasks={sortTasks} />
    </div>
  );
}

export default App;