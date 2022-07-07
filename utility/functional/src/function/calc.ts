import _ from 'lodash'
import { rest, first, isNonEmptyArray } from './typeEnhancedLodash'

export const sum = (arr: Array<number>, acc = 0): number => {
  if (isNonEmptyArray(arr)) {
    return sum(rest(arr), acc + first(arr))
  } else {
    return acc
  }
}
