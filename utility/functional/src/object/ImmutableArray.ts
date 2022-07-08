import F from '../utility/FunctionalUtility'
import M from '../utility/MathematicsUtility'

/**
 * 空でない配列の型定義
 * @module NonEmptyArray
 */
export type NonEmptyArray<T> = [T, ...T[]]

export default class ImmArray {
  /**
   * 配列が空かどうかを判定し、適切に型変換する
   * @module isNonEmptyArray
   * @param {Array<T>} arr - 任意の配列
   * @return {boolean} - 空でなければtrue
   */
  isNonEmptyArray = <T>(arr: T[]): arr is NonEmptyArray<T> => arr.length > 0

  /**
   * 配列の最初の要素を取得
   * @module first
   * @param {NonEmptyArray<T>} array - 空ではない配列
   * @return {T} - arrayの最初の要素
   */
  first = (array: NonEmptyArray<number>) => array[0]

  /**
   * 最初の要素を除いた配列を取得
   * @module rest
   */
  rest = <T>(func: NonEmptyArray<T>): Array<T> => {
    const [, ...sliced] = func
    return sliced
  }

  /**
   * 配列の全要素の和を求める
   * @module sum
   */
  sum = (arr: Array<number>, acc = 0): number => {
    if (this.isNonEmptyArray(arr)) {
      return this.sum(this.rest(arr), acc + this.first(arr))
    } else {
      return acc
    }
  }

  /**
   * 配列の各要素に関数適用
   * @module map
   * @param {function} transform - 各要素に適用したい関数
   * @param {array} array - 変換したい関数
   * @return {array} - 変換後の配列
   */
  map = (transform: Function) => {
    return (array: Array<any>) => {
      return array.reduce((accumulator, item) => {
        return accumulator.concat(transform(item))
      }, [])
    }
  }

  /**
   * 配列の要素数を取得
   * @module length
   */
  // 配列の要素を全て1に変換し、それを合計したものが配列の長さ
  length = (array: Array<any>) =>
    F.compose(this.sum, this.map(M.alwaysOne))(array)

  /**
   * 非破壊的なreverse関数
   * @module reverse
   */
  reverse = (array: Array<any>) => {
    return array.reduce((accumulator, item) => {
      return [item].concat(accumulator)
    }, [])
  }
}
