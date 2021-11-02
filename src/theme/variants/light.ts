import { DefaultTheme } from 'styled-components'
import createBreakpoints from '../utils/createBreakpoints'

const lighTheme: DefaultTheme = {
    palette: {
        primary: {
            main: '#7c01ff',
            light: '#7c01ff',
            dark: '#5701b3',
            contrastText: '#fff',
        },
        text: {
            white: '#fff',
            black: '#222',
            gray: '#999'
        }
    },
    breakpoints: createBreakpoints()
}

export default lighTheme
