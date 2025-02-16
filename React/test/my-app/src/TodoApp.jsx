import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        setTasks([...tasks, input]);
        setInput('');
    };

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTask}>Ajouter</button>
            <ul>
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
        </div>
    );
}

export default TodoApp;