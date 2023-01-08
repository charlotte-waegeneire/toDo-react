import {useContext} from "@/components/ContextProvider";
import Link from "@/components/Link";
import {PlusIcon} from "@heroicons/react/20/solid";
import {useCallback} from "react";

const List = (props) => {
    const {list, currentId} = props
    const {setCurrentList, currentList} = useContext()

    const countTasks = list.tasks.length
    const countDone = list.tasks.filter(({isDone}) => Boolean(isDone)).length

    const handleClickList = useCallback(
        (event) => {
            const listId = Number.parseInt(
                event.currentTarget.getAttribute("data-list-id"),
                10
            )
            setCurrentList(listId)
        },
        []
    )

    return (
        <>
            <div className="border rounded-t-lg"
                 data-list-id={list.id}
                 onClick={handleClickList}>
                <div className="flex justify-between p-2 font-bold m-1">
                    <div className="text-black pr-4">
                        {list.name}
                    </div>
                    <div className="flex justify-between text-sm rounded-full text-center bg-blue-400">
                        {
                            countDone !== 0 ? (
                                <div className="z-10 rounded-full w-6 bg-green-400">
                                    {countDone}
                                </div>
                            ) : null
                        }
                        {
                            countTasks !== countDone ? (
                                <div className="z-0 rounded-full w-6">
                                    {countTasks}
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                {
                    currentList === currentId ? (
                        <div className="w-full bg-slate-300 rounded-full h-1">
                            <div style={{width: (countDone/countTasks)*100 + "%"}}
                                className="bg-green-600 h-1 rounded-lg duration-1000"></div>
                        </div>
                    ) : null
                }

            </div>
        </>

    )
}

const Lists = () => {
    const {state} = useContext()

    return (
        <div className="flex overflow-x-auto whitespace-nowrap">
            {
                state.map((list, id) => (
                    <List list={list} currentId={id}/>
                ))
            }
            <button className="ml-3 px-3 border rounded-t-lg hover:bg-slate-300">
                <Link href={`/lists/create`}>
                    <PlusIcon className="w-6 h-6"/>
                </Link>
            </button>
        </div>
    )
}

export default Lists