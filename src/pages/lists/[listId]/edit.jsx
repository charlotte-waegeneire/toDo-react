import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import TodoForm from "@/components/TodoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

export const getServerSideProps = ({ params }) => ({
    props: {
        params: {
            listId: Number.parseInt(params.listId, 10),
        },
    },
})

const EditListPage = (props) => {
    const {
        params: { listId },
    } = props
    const { state, updateList } = useContext()
    const router = useRouter()
    const handleSubmit = useCallback(
        (values) => {
            updateList(values)
            router.push("/")
        },
        [router, updateList]
    )

    return (
        <Page>
            <TodoForm
                actionName='Modifier'
                target='une liste'
                onSubmit={handleSubmit}
                initialValues={state.find(({ id }) => id === listId)}
            />
        </Page>
    )
}

export default EditListPage
