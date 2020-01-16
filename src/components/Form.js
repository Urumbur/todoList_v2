import React, {useState} from 'react';
import '../styles/Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Form = (props) => {

    const [taskName, addTaskName] = useState('');
    const [taskDate, addTaskDate] = useState('');
    const [taskChecked, addTaskChecked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if(taskName) {
            props.addTask(taskName, taskDate, taskChecked);
            addTaskName('');
            addTaskDate('');
        } else {
            alert("Zadanie musi mieć tekst!");
        }
    }

    return ( 
        <div className='newTask'>
            <h1>Lista zadań</h1>
            <hr/>
            <h2>Dodaj nowe zadanie</h2>
            <form>
                <input type='text' placeholder='Wpisz zadanie...' value={taskName} onChange={e => addTaskName(e.target.value)} />
                <input type='date' value={taskDate} onChange={e => addTaskDate(e.target.value)} />
                <label className="checkbox-label">
                    <input type='checkbox' value={taskChecked} onChange={e => addTaskChecked(e.target.checked)} />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">Ważne</span>
                </label>
                <button onClick={e => handleClick(e)}> <FontAwesomeIcon icon={faPlusCircle} className='addIcon' /> Dodaj zadanie</button>
            </form>
            <hr/>
        </div>
    );
}

export default Form;