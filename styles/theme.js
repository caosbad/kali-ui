import { extendTheme } from '@chakra-ui/react'
import Button from './Button.js'

const colors = {
  kali: {
    100: '#46254A', // american purple
    200: '#294A25', // pomona green
    300: '#34254A', // russian violet
    400: '#F4C824', // deep lemon
    500: '#F03B361', // rajah
    600: '#B82623', // firebrick
    700: '#FA2A10', // ogre odor
    800: '#0c0101', // black
    900: '#fffefe', // white
  },
}

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  components: {
    Button: Button,
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  colors,
})

export default theme
