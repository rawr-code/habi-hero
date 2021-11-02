export const mediaQueries = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export type MediaQueries = typeof mediaQueries[number]

export const units = ['px', 'rem'] as const
export type Units = typeof units[number]

export interface IKeys {
  xs: number | string
  sm: number | string
  md: number | string
  lg: number | string
  xl: number | string
}

export interface IBreakpoints {
  keys: IKeys
  unit: Units
  step: number | string
  up: (key: MediaQueries) => string
  down: (key: MediaQueries) => string
  between: (start: MediaQueries, end: MediaQueries) => string
  only: (key: MediaQueries) => string
  width: (width: number) => string
}
