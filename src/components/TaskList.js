import React from 'react';
import '../styles/TaskList.css';
import Task from './Task';

const TaskList = (props) => {

    props.sortTasks();
    const active = props.tasksList.filter(task => task.active);
    const done =  props.tasksList.filter(task => !task.active);
    const activeTasks = active.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} changeTaskStatus={props.changeTaskStatus} />);
    const doneTasks = done.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} changeTaskStatus={props.changeTaskStatus} />);

    return (
        <>
            <h3>{activeTasks.length > 0 ? `Zadania do zrobienia (${activeTasks.length})` : 'Brak aktywnych zadań!!!'}</h3>
            <ul>
                {activeTasks}
                {doneTasks}
            </ul>
        </>
    );
}

export default TaskList;