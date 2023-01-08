import Head from "next/head.js"

const Page = (props) => {
    const { title = "Todo List", children } = props

    return (
        <main>
            <Head>
                <title>{title}</title>
            </Head>
            <section className="mt-2">{children}</section>
        </main>
    )
}

export default Page
