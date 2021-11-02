import { IBreakpoints, units, mediaQueries, MediaQueries } from '../../types/breakpoints'

const breakpointsDefaultConfig = {
  keys: {
    xs: 480,
    sm: 768,
    md: 1200,
    lg: 1600,
    xl: 1920
  },
  unit: units[0],
  step: 5,
  up: (key: MediaQueries) => `${key}`,
  down: (key: MediaQueries) => `${key}`,
  between: (start: MediaQueries, end: MediaQueries) => `${start}${end}`,
  only: (key: MediaQueries) => `${key}`,
  width: (width: number) => `${width}`
}

type QueryTypes = 'min' | 'max'

const createBreakpoints = (breakpoints = breakpointsDefaultConfig): IBreakpoints => {
  const { keys, unit, step } = breakpoints

  const generateMediaQuery = (type: QueryTypes, width: number) => {
    return `@media (${type}-width:${width}${unit})`
  }

  const getKeyValue = (key: MediaQueries): number => {
    const keyValue = keys[key] ? keys[key] : 0
    return keyValue
  }

  const getKeyIndex = (key: MediaQueries): number => {
    const keyIndex = mediaQueries.indexOf(key)
    return keyIndex
  }

  const up = (key: MediaQueries) => {
    const width = getKeyValue(key)
    return generateMediaQuery('min', width)
  }

  const down = (key: MediaQueries) => {
    const width = getKeyValue(key)
    return generateMediaQuery('max', width - step / 100)
  }

  const between = (start: MediaQueries, end: MediaQueries) => {
    const startValue = getKeyValue(start)
    const endValue = getKeyIndex(end) !== -1 ? getKeyValue(end) : 0

    return (
      `${generateMediaQuery('min', startValue)} and ` +
      `${generateMediaQuery('max', endValue - step / 100)}`
    )
  }

  const only = (key: MediaQueries) => {
    const keyLength = Object.keys(keys).length

    const start = key
    const end = mediaQueries[getKeyIndex(key) + 1]

    if (getKeyIndex(key) + 1 < keyLength) {
      return between(start, end)
    }

    return up(key)
  }

  const width = (width: number) => {
    return generateMediaQuery('min', width)
  }

  return {
    keys,
    unit,
    step,
    up,
    down,
    between,
    only,
    width
  }
}

export default createBreakpoints
