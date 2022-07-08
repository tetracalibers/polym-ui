export default class RecursiveObject {
  /**
   * パターンマッチを行う
   * @module match
   * @param {function} data - 代数的データ構造のデータ
   * @param {List} pattern - 条件分岐を記述したインスタンス
   */
  match = (data, pattern) => {
    return data.call(this, pattern)
  }

  empty = (_?: any) => {
    return pattern => {
      return pattern.empty()
    }
  }
}
