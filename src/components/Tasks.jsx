import Link from "@/components/Link";
import {TrashIcon} from "@heroicons/react/24/solid";
import {useContext} from "@/components/ContextProvider";
import {useCallback} from "react";

const Task = (props) => {
    const {task} = props
    const {currentList, deleteTask, updateTask} = useContext()

    const handleCheck = useCallback(
        () => {
            const updatedTask = {
                id: task.id,
                name: task.name,
                isDone: !task.isDone
            }

            updateTask(updatedTask, currentList)
        }, [updateTask, currentList]
    )

    const handleDeleteTask = useCallback(
        (event) => {
            const taskId = Number.parseInt(
                event.currentTarget.getAttribute("data-task-id"), 10
            )

            deleteTask(taskId, currentList)
        },
        []
    )

    return (
        <li className="flex justify-between w-full border-b border-gray-100 group p-2">
            <div className="items-center pl-3">
                <input type="checkbox"
                       value=""
                       className="h-5 w-5 hover:cursor-pointer appearance-none border-2 checked:bg-green-400 duration-1000"
                       defaultChecked={task.isDone}
                       onClick={handleCheck}/>
                <Link href={`/tasks/${task.id}/edit`}>
                    <label htmlFor="vue-checkbox"
                           className="py-3 ml-2 w-full text-sm text-black">{task.name}</label>
                </Link>
            </div>
            <button className="hidden group-hover:block group-hover:delay-200"
                    data-task-id={task.id}
                    onClick={handleDeleteTask}>
                <TrashIcon className="text-black h-6 w-6"/>
            </button>
        </li>
    )
}

const Tasks = (props) => {
    const {currentList} = props
    const {state, filter} = useContext()

    return (
        <ul className="font-medium text-gray-100 bg-white border">
            {
                state[currentList].tasks.map((task) => (
                        (filter && task.isDone) ? null : <Task task={task}/>
                    )
                )
            }
        </ul>
    )
}

export default Tasks