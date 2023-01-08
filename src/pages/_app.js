import ContextProvider from "@/components/ContextProvider.jsx"
import "@/styles.css"

const App = ({ Component, pageProps }) => {
  return (
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
  )
}

export default App
