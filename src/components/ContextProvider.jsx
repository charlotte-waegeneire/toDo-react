import {
    createContext,
    useCallback,
    useContext as useNativeContext,
    useState,
} from "react"

const initialState = [
    {
        id: 0,
        name: "Essentials",
        tasks: [
            {
                id: 0,
                name: "Streaming Chase Atlantic",
                isDone: true,
            },
            {
                id: 1,
                name: "Touching some grass",
                isDone: false,
            },
            {
                id: 2,
                name: "Working out",
                isDone: false,
            },
        ]
    },
    {
        id: 1,
        name: "Important",
        tasks: [
            {
                id: 3,
                name: "React app",
                isDone: false,
            },
            {
                id: 4,
                name: "Hating on JS",
                isDone: true,
            },
            {
                id: 5,
                name: "Python > JS",
                isDone: true,
            },
        ]
    }
]

export const Context = createContext()

export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
    const [currentList, setCurrentList] = useState(0)
    const [nextListId, setNextListId] = useState(2)
    const [nextId, setNextTaskId] = useState(6)
    const [state, setState] = useState(initialState)
    const [filter, setFilter] = useState(false)

    const getNextListId = useCallback(() => {
        setNextListId(nextListId + 1)

        return nextListId
    }, [nextListId])

    const getNextTaskId = useCallback(() => {
        setNextTaskId(nextId + 1)

        return nextId
    }, [nextId])

    const createList = useCallback(
        (state) => {
            setState((states) => [
                ...states,
                {
                    id: getNextListId(),
                    ...state,
                    tasks: [
                        {
                        id: getNextTaskId(),
                        name: "Filling my new list with tasks",
                        isDone: false,
                    }
                    ]
                },
            ])
        },
        [state, currentList, getNextListId, getNextTaskId]
    )

    const createTask = useCallback(
        (states) => {
            const newState = state.slice()
            newState[currentList].tasks.push({
                id: getNextTaskId(),
                ...states,
                done: false,
            })
            setState(newState)
        },
        [state, currentList, getNextTaskId]
    )

    const deleteList = useCallback(
        () => {
            setState(
                (state) => state.filter(({id}) => id !== currentList)
            )
        },[state]
    )

    const deleteTask = useCallback(
        (taskId, currentList) => {
            const newState = state.slice()
            newState[currentList].tasks = newState[currentList].tasks.filter(
                ({id}) => id !== taskId
            )
            setState(newState)
        },
        [state, getNextTaskId]
    )

    const updateList = useCallback((updatedList) => {
        setState((lists) =>
            lists.map((list) =>
                list.id === updatedList.id ? updatedList : list)
        )
    }, [state])


    const updateTask = useCallback(
        (updatedTask, currentList) => {
            const newState = state.slice()
            newState[currentList].tasks = newState[currentList].tasks.map(
            (task) => task.id === updatedTask.id ? updatedTask : task)
            setState(newState)
        },
        [state, currentList, getNextTaskId]
    )

    const changeFilter = useCallback(
        () => {
            setFilter(!filter)
        }, [filter]
    )

    return (
        <Context.Provider
            {...props}
            value={{
                state,
                currentList,
                setCurrentList,
                createList,
                createTask,
                deleteList,
                deleteTask,
                updateList,
                updateTask,
                filter,
                changeFilter,
            }}
        />
    )
}

export default ContextProvider
