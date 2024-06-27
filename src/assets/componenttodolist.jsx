import React, { useState, useEffect } from 'react';
import TotalTasks from './TotalTasks';
import CompletedTasks from './CompletedTasks';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    alert("Selamat Datang");
    return () => {
      alert("Sampai Jumpa");
    };
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setTotalTasks(totalTasks + 1);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setTotalTasks(totalTasks - 1);
    setCompletedTasks(completedTasks + 1);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TotalTasks total={totalTasks} />
      <CompletedTasks completed={completedTasks} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTask(`Task ${tasks.length + 1}`)}>Add Task</button>
    </div>
  );
};

export default TodoList;
