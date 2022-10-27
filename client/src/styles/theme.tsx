import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: `'DM Sans', sans-serif`
    },
    colors: {
        darkGrey: "#545454",
        lightGrey: '#F8F8F8',
        blue: '#2F80ED'
    },
    components: {
        Heading: {
            variants: {
                h1: {
                    fontSize: "60px",
                    fontWeight: "bold",
                    color: "darkGrey"
                },
                h2: {
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "darkGrey"
                }
            }
        }
    }
})

export default theme