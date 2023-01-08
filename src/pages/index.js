import {useContext} from "@/components/ContextProvider.jsx"
import Link from "@/components/Link.jsx"
import {TrashIcon} from "@heroicons/react/24/solid"
import {CheckCircleIcon, CheckIcon, PencilSquareIcon, PlusIcon} from "@heroicons/react/20/solid";
import Lists from "@/components/Lists";
import Tasks from "@/components/Tasks";
import Page from "@/components/Page";
import {useCallback} from "react";

const IndexPage = () => {
    const {
        currentList,
        deleteList,
        filter,
        changeFilter,
    } = useContext()

    const handleDeleteList = useCallback(
        () => {
            deleteList(currentList)
        }, [deleteList, currentList]
    )

    const handleFilter = useCallback(
        () => {
            changeFilter()
        }, [changeFilter]
    )

    const buttonStyle = "mr-2 w-6 h-6"

    return (
        <Page title="Todo">
            <Lists />

            <div className="flex justify-between m-2">
                <div className="flex justify-start">
                    <Link href={`/tasks/create`}>
                        <PlusIcon className={buttonStyle}/>
                    </Link>
                    <Link href={`/lists/${currentList}/edit`}>
                        <PencilSquareIcon className={buttonStyle}/>
                    </Link>
                        <TrashIcon onClick={handleDeleteList} className={buttonStyle}/>
                </div>
                <button className="flex justify-end" onClick={handleFilter}>
                    {
                        filter === false ? (
                            <CheckIcon className="mr-2 w-6 h-6" />
                        ) : (
                            <CheckCircleIcon className="mr-2 w-6 h-6" />
                        )
                    }
                </button>
            </div>

            <Tasks currentList={currentList}/>
        </Page>
    )
}

export default IndexPage