import React from 'react';
import '../styles/Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Task = (props) => { 
    
    const {id, active, important, name, date, finishDate} = props.task;

    if(active) {
        return (
            <li>
                <div className={important ? 'important' : ''} onClick={()=>props.changeTaskStatus(id)}>               
                    <p>
                        <strong>{name} </strong>
                        {date ? <em>Zrobić do: {date} </em> : 'Bezterminowe'}
                    </p>  
                </div>          
                <button className='delete' onClick={()=>props.deleteTask(id)}><FontAwesomeIcon icon={faTrashAlt} className='deleteIcon' /></button>
            </li>
        );
    } else {
        return (
            <li className={active ? '' : 'noActive--list'}>
                <div className={active ? '' : 'noActive'} onClick={()=>props.changeTaskStatus(id)}>
                    <p>
                        <strong>{name} </strong>
                        <em>Zrobione: {finishDate} </em>
                    </p>
                </div>                
                <button className='delete' onClick={()=>props.deleteTask(id)}><FontAwesomeIcon icon={faTrashAlt} className='deleteIcon' /></button>
            </li>
        );
    }

}

export default Task;