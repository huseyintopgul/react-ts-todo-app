import { ChangeEvent, FC, useState } from 'react';
import { todoTypes } from './appTypes';
import TaskItem from './TaskItem';
import './style.css';

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoTypes[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'taskInput') {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value))
    }
  };
  const addNewTask = () => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask('');
    setWorkDay(0);
  };
  const deleteTask = (nameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== nameToDelete
    }));
  };

  return (
    <div>
      <div className='mainCard'>
        <input
          className='mainCardInput'
          type="text"
          name='taskInput'
          value={task}
          placeholder='Görevinizi giriniz...'
          onChange={handleChange} />
        <input
          className='mainCardInput'
          type="number"
          name='workDayInput'
          value={workDay}
          placeholder='Tamamlanma süresi...'
          onChange={handleChange} />
        <button
        className='mainCardBtn'
          onClick={addNewTask}>
          Yeni Görev Ekle
        </button>
      </div>
      <div className='taskBody'>
        {
          todoList.map((task: todoTypes, index: number) => {
            return <TaskItem key={index} task={task} deleteTask={deleteTask} />
          })
        }
      </div>
    </div>
  )
}

export default App