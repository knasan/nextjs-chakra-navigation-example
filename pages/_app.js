import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeProvider options={{ initialColorMode: 'dark', useSystemColorMode: true }} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp