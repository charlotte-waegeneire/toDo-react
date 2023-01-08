import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import TodoForm from "@/components/TodoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreateListPage = () => {
    const { createList } = useContext()
    const router = useRouter()
    const handleSubmit = useCallback(
        (values) => {
            createList(values)
            router.push("/")
        },
        [router, createList]
    )

    return (
        <Page>
            <TodoForm actionName='Créer'
                      target='une liste'
                      onSubmit={handleSubmit} />
        </Page>
    )
}

export default CreateListPage