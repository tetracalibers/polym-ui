import _ from 'lodash'

export type NonEmptyArray<T> = [T, ...T[]]

export const needNonEmpty = (arr: NonEmptyArray<number>) => arr.length
export const isNonEmptyArray = <T>(arr: T[]): arr is NonEmptyArray<T> =>
  arr.length > 0

export const first = (array: NonEmptyArray<number>) => array[0]

export const succ = (n: number) => n + 1
export const prev = (n: number) => n - 1

export const rest = <T>(
  func: NonEmptyArray<T>
  //start = func.length - 1
): Array<T> => {
  const [, ...sliced] = func
  return sliced
}
