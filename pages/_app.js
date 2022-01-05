import * as React from "react"
import Layout from '../components/Layout'
import '../styles/globals.css'
import { ChakraProvider ,extendTheme } from "@chakra-ui/react"
function MyApp({ Component, pageProps }) {
  const colors = {
    brand: {
      900: "#ED64A6",
      800: "#ED64A6",
      700: "#ED64A6",
    },
  }
  const theme = extendTheme({ colors })
  return (
    <Layout>
       <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  )
}

export default MyApp
