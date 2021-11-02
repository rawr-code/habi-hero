export interface IColor {
  main: string
  light: string
  dark: string
  contrastText: string
}

export interface IText {
  white: string
  black: string
  gray: string
}

export interface IPalette {
  primary: IColor
  text: IText
}
