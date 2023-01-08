import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import TodoForm from "@/components/TodoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreateTaskPage = () => {
    const { createTask } = useContext()
    const router = useRouter()
    const handleSubmit = useCallback(
        (values) => {
            createTask(values)
            router.push("/")
        },
        [router, createTask]
    )

    return (
        <Page>
            <TodoForm actionName='Créer'
                      target='une tâche'
                      onSubmit={handleSubmit} />
        </Page>
    )
}

export default CreateTaskPage
