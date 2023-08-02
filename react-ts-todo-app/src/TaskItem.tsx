import { todoTypes } from './appTypes'
type Propstype = {
    task: todoTypes,
    deleteTask(nameToDelete: string): void
}
const TaskItem = ({ task, deleteTask }: Propstype) => {

    return (
        <div className='card'>
            <div>
                <p>{task.taskName}</p>
                <p>{task.workDay}</p>
                <button onClick={() => deleteTask(task.taskName)}>Sil</button>
            </div>
        </div>
    )
}

export default TaskItem





