import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import TodoForm from "@/components/TodoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

export const getServerSideProps = ({ params }) => ({
    props: {
        params: {
            taskId: Number.parseInt(params.taskId, 10),
        },
    },
})

const EditTaskPage = (props) => {
    const {
        params: { taskId },
    } = props
    const { state, currentList, updateTask } = useContext()
    const router = useRouter()
    const handleSubmit = useCallback(
        (values) => {
            updateTask(values, currentList)
            router.push("/")
        },
        [router, updateTask, currentList]
    )

    return (
        <Page>
            <TodoForm
                actionName='Editer'
                target='une tâche'
                onSubmit={handleSubmit}
                initialValues={state[currentList].tasks.find(({ id }) => id === taskId)}
            />
        </Page>
    )
}

export default EditTaskPage
