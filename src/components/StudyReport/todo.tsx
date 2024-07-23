import React, { useState } from 'react';

interface Task {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>('');

  const handleAddTask = (): void => {
    if (input) {
      setTasks([...tasks, { id: tasks.length, text: input }]);
      setInput('');
    }
  };

  const handleDeleteTask = (id: number): void => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
