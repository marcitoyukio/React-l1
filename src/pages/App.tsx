import React, { useState } from 'react';
import Forms from '../components/Forms'
import List from '../components/List'
import style from './App.module.scss'
import Timer from '../components/Timer';
import { ITask } from '../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function taskSelector(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks => 
        oldTasks.map(task => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            }
          }
          return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks}/>
      <List 
        tasks={tasks} 
        taskSelector={taskSelector}
      />
      <Timer 
        selected={selected}
        endTask={endTask}
      />
    </div>
  );
}

export default App;
