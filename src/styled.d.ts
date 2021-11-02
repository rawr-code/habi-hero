import 'styled-components';
import { IBreakpoints } from './types/breakpoints'
import { IPalette } from './types/palette'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IPalette
    breakpoints: IBreakpoints
  }
}