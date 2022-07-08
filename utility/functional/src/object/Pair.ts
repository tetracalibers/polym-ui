import RecursiveObject from './RecursiveObject'

export default class Pair extends RecursiveObject {
  /* pair のデータ構造 */
  cons = (left, right) => {
    return pattern => {
      return pattern.cons(left, right)
    }
  }

  /* ペアの右側を取得する */
  right = tuple => {
    return this.match(tuple, {
      cons: (_left, right) => {
        return right
      },
    })
  }

  /* ペアの左側を取得する */
  left = tuple => {
    return this.match(tuple, {
      cons: (left, _right) => {
        return left
      },
    })
  }
}
