import F from './FunctionalUtility'

export default class M {
  /**
   * 必ず1を返す関数
   * @module alwaysOne
   */
  static alwaysOne = F.constant(1)

  /**
   * 関数による1の表現（チャーチ数）
   */
  static one = f => {
    return x => {
      return f(x) // f関数を1回適用する
    }
  }

  /**
   * 関数による2の表現（チャーチ数）
   */
  two = f => {
    return x => {
      return f(f(x))
    }
  }

  /**
   * 関数による3の表現（チャーチ数）
   */
  three = f => {
    return x => {
      return f(f(f(x)))
    }
  }

  /**
   * インクリメントした値を返す
   * @module succ
   */
  static succ = n => {
    return f => {
      return x => {
        return f(n(f)(x))
      }
    }
  }

  /**
   * デクリメントした値を返す
   * @module prev
   */
  static prev = (n: number) => n - 1

  /**
   * 関数が呼ばれるごとに数を一つずつ数え上げていく
   * @module counter
   */
  counter = init => {
    var countingNumber = init
    /* countingNumberの環境を持つクロージャーを返す */
    return _ => {
      countingNumber = countingNumber + 1
      return countingNumber
    }
  }
}
